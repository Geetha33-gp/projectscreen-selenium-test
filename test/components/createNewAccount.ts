import { $ } from '../types/wdio';

export function createNewAccount($: $, emailId: any, confirmEmailId: any, password: any, confirmPassword: any, mobileNumber: any, otp: any) {
   const clickToCreateNewAccount = $('a[href="/activate"]');
   clickToCreateNewAccount.click();
   browser.pause(1000);

   const email = $('input[id="email"]');
   email.setValue(emailId);
   browser.pause(1000);

   const confirmEmail = $('input[id="confirmemail"]');
   confirmEmail.setValue(confirmEmailId);
   browser.pause(1000);

   const pswd = $('input[id="password"]');
   pswd.setValue(password);
   browser.pause(1000);

   const confirmPswd = $('input[id="confirmpassword"]');
   confirmPswd.setValue(confirmPassword);
   browser.pause(1000);

   const mobileNum = $('input[id="phone"]');
   mobileNum.setValue(mobileNumber);
   browser.pause(1000);

   const sendOTP = $('button[id="send-otp"]');
   sendOTP.click();
   browser.pause(1000);

   const verificationCode = $('input[id="otp"]');
   verificationCode.setValue(otp);
   browser.pause(1000);

   const clickCheckboxToConfirm = $('img[alt="Checkbox"]');
   clickCheckboxToConfirm.click();
   browser.pause(1000);

   const createNewAccountText = $('.ScreenContainer > .IntroParagraphs');
   createNewAccountText.getText().should.equal('Please create an account to activate and link your kit.');

   const submit = $('button[id="create-account-button"]');
   submit.click();
   browser.pause(3000);

   const providedInfo = $('input[type="checkbox"]');
   providedInfo.click();
   browser.pause(1000);

   const continueToDashboard = $('button[id="consent-go-to-dashboard"]');
   continueToDashboard.click();
   browser.pause(1000);
}
