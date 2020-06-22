import { login, logout , forgotPassword, resetPswd } from './components/login';
import moment from 'moment';

browser.setTimeout({ 'implicit': 5000 });

//LOGIN
describe('User logs in to the portal', function () {      
  const userName = 'test_automation@prenetics.com';
  const password = '12345678';
  it('should let you login with valid credentials', function () {
    browser.deleteCookies();
    browser.url('/');
    login($, userName, password);
    logout($);
  });
});

//RESERT PASSWORD
describe('Password reset workflow,', function () {        
  const emailToResetPswd = 'test_automation@prenetics.com';
  const newPswd = '12345678';
  const otp = Array.from(moment().format(`MMDD`));
  it('Here you can Reset New Password', function () {
    browser.deleteCookies();
    browser.url('/');
    forgotPassword($);
    resetPswd($, emailToResetPswd, otp, newPswd);
  });
});
