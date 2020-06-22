import * as chai from 'chai';
import { check, config, DEFAULTLAB, envs } from './util';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

export interface BarcodeRequest {
    token: string,
    quantity: number,
    product: string,
    owner: string,
    prefix: string,
    length?: number,
    channel?: string,
    segment?: string;
    enable?: boolean,
    lab?: string
}

export function generateBarcodes(request: BarcodeRequest): Promise<Map<string, string>> {
    const token = request.token;
    const quantity = request.quantity;
    const product = request.product;
    const owner = request.owner;
    const prefix = request.prefix;
    const channel = request.channel || 'd2c';
    const segment = request.segment || 'sf';
    const length =  request.length || 15;
    const enable = request.enable !== false;
    const lab = request.lab || DEFAULTLAB;
    console.log(`Generate ${quantity} barcodes for ${product} on ${channel}`)
    return new Promise(resolve => {
      chai.request(envs.fulfilment.baseUrl)
          .post(config.fulfilment.barcode)
          .auth(token, { type: 'bearer' })
          .set('x-owner', owner)
          .send({
              quantity : quantity,
              prefix : prefix,
              length : length,
              product : [
                  product
              ],
              channel : [
                  channel
              ],
              segment: [
                  segment
              ],
              lab: lab
          })
          .end((err, res) => {
              expect(err).to.be.null;
              check(res, 200);
              expect(res).to.have.status(200);
              expect(res.body.length).to.be.eq(quantity);
              for (let i = 0; i < quantity; i++) {
                  expect(res.body[i].scope.length).to.be.eq(1);
                  expect(res.body[i].scope[0]).to.be.eq(product);
                  expect(res.body[i].status).to.be.eq(enable ? 'ordered' : 'open');
              }
              console.log(`Got kit ${res.body.length} for product ${product}`);
              const list: { kitId: string, barcode: string }[] = res.body;
              resolve(list.reduce<Map<string, string>>((m, b) => m.set(b.kitId, b.barcode), new Map()));
          });
    });
  }
  