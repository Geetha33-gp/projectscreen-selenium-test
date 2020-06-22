import { envs } from '../types/util';
import { loginWithPassword } from '../types/loginWithPassword';
import { generateBarcodes } from '../types/generateBarcode';

export function barcodeValue() {
  const lab = 'preneticshk';

  let fulfilToken = '';
  test('Login for fulfilment', async () => {
    fulfilToken = await loginWithPassword(envs.preneticsfulfilment.username, envs.preneticsfulfilment.password);
  });

  let barcode = '', kitId = '';
  test('Generate and enable barcode', async () => {
    const owner = envs.preneticsfulfilment.username;
    const results = await generateBarcodes({
      token: fulfilToken,
      quantity: 1,
      product: 'global-vital',
      owner: owner,
      channel: 'testing',
      segment: 'internal-prenetics',
      prefix: '2020',
      length: 14,
      enable: true,
      lab: lab
    });
    ([kitId, barcode] = results.entries().next().value);
    console.log(`Generate Barcode ${barcode} for kitId ${kitId}`);
  });
  return barcode;
}