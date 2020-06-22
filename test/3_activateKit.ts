import { login } from './components/login';
import { toActivateKit, activateYourKit, scheduleReturn, reScheduleOrCancel, collectSample, returnToPreviousStep } from './components/activateKit';
import { generateBarcode } from './components/generateBarcode';

browser.setTimeout({ 'implicit': 5000 });

describe('Activate Kit', function () {    
    const userName = 'test_automation@prenetics.com';
    const password = '12345678';
    const firstName = 'Test';
    const lastName = 'Account';
    const dob = '17/12/1995';
    const hkId = 'A555555(0)';
    const passportNum = '23232323';
    const hkReturnHomePermit = 'HK Return Home Permit';
    const travelDocument = 'Travel Document';
    const barcodeValue = generateBarcode();
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

