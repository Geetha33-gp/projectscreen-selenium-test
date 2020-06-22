import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { envs, config, check, Partner } from './util';

chai.use(chaiHttp);
const expect = chai.expect;

export function loginWithPassword(username: string, password: string, partner: Partner = Partner.circle): Promise<string> {
  return new Promise(resolve => {
    chai.request(envs.authentication.baseUrl)
      .post(config.authentication.passwordToken)
      .query({ partner: partner })
      .send({ username, password })
      .end((err, res) => {
        expect(err).to.be.null;
        check(res, 200);
        expect(res).to.have.status(200);
        expect(res.body.token).is.not.null;
        resolve(res.body.token);
      });
  });
}

export function loginWithPasswordAndLocale(username: string, password: string, locale: string): Promise<string> {
  return new Promise(resolve => {
    chai.request(envs.authentication.baseUrl)
      .post(config.authentication.passwordToken)
      .send({ username, password, locale })
      .end((err, res) => {
        expect(err).to.be.null;
        check(res, 200);
        expect(res).to.have.status(200);
        expect(res.body.token).is.not.null;
        resolve(res.body.token);
      });
  });
}