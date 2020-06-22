import { createNewAccount } from './components/createNewAccount';
import { getEmailUsername } from './types/util';
import moment from 'moment';

browser.setTimeout({ 'implicit': 5000 });

describe('User logs in to the portal', function () {    
  const emailId = getEmailUsername();
  const confirmEmailId = getEmailUsername();  
  // const emailId = 'test_automation@gmail.com';  
  // const confirmEmailId = 'test_automation@gmail.com';
  const password = '12345678';
  const confirmPassword = '12345678';
  const mobileNumber = '99996666';
  const otp = Array.from(moment().format(`MMDD`));

  it('should let you login with valid credentials', function () {
    browser.deleteCookies();
    browser.url('/');
    createNewAccount($, emailId, confirmEmailId, password, confirmPassword, mobileNumber, otp);
  });
});
