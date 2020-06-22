import { login } from './components/login';
import { toActivateKit, activateYourKit, scheduleReturn, reScheduleOrCancel, collectSample, returnToPreviousStep } from './components/activateKit';
import { envs, DEFAULTLAB } from './types/util';
import { loginWithPassword } from './types/loginWithPassword';
import { generateBarcodes } from './types/generateBarcode';

browser.setTimeout({ 'implicit': 5000 });

describe('Activate Kit', function () {    
  // let fulfilToken: string;
  //   it('Login for fulfilment', async () => {
  //       fulfilToken = await loginWithPassword(envs.preneticsfulfilment.username, envs.preneticsfulfilment.password);
  //   });

  //   let barcode: string;
  //   let kitId: string;
  //   it('Generate and enable barcode', async () => {
  //       const owner = envs.preneticsfulfilment.username;
  //       const results = await generateBarcodes({
  //           token: fulfilToken,
  //           quantity: 1,
  //           product: 'babylon',
  //           owner: owner,
  //           prefix: '2020',
  //           length: 14,
  //           enable: true,
  //           lab: DEFAULTLAB
  //       });
  //       ([kitId, barcode] = results.entries().next().value);
  //       console.log(`Generated barcode ${barcode}`);
  //   }).timeout(300000);

    const userName = 'test_automation@prenetics.com';
    const password = '12345678';
    const firstName = 'Test';
    const lastName = 'Account';
    const dob = '17/12/1995';
    const hkId = 'A555555(0)';
    const passportNum = '23232323';
    const hkReturnHomePermit = 'HK Return Home Permit';
    const travelDocument = 'Travel Document';
    const barcodeValue = '20123076113251';
    const addressLine1 = '123, Main Street';
    const addressLine2 = 'Cleveland';
    
  it('should let you login with valid credentials', function () {
    browser.deleteCookies();
    browser.url('/');
    login($, userName, password);
    toActivateKit($);
    activateYourKit($, firstName, lastName, dob, hkId, passportNum, hkReturnHomePermit, travelDocument, barcodeValue);
    scheduleReturn($, addressLine1, addressLine2);
    reScheduleOrCancel($);
    collectSample($);
    returnToPreviousStep($);
  });
});

