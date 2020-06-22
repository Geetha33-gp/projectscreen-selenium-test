import { $ } from '../types/wdio';

export function login($: $, email: any, password: any) {
   const emailId = $('input[id="username"]');
   const passwordType = $('input[id="password"]');
   const login = $('button[id="login-button"]');
   browser.pause(1000);
   emailId.setValue(email);
   browser.pause(1000);
   passwordType.setValue(password);
   browser.pause(1000);
   const logInText = $('h2');
   logInText.getText().should.equal('Log In');
   login.click();
   browser.pause(4000);
}

export function logout($: $) {
   const logout = $("a[href='/logout']");
   browser.execute("arguments[0].setAttribute('style', 'background: #FFB533;');", (logout as any));
   browser.pause(4000);
   logout.getText().should.equal('LOG OUT');
   logout.click();
   browser.pause(2000);
}

export function forgotPassword($: $) {
   const toResetPswd = $("a[href='/forgot-password']");
   browser.pause(1500);
   const footerText = $(".Footnote");
   footerText.getText().should.equal('Did you forget your password?');
   toResetPswd.click();
   browser.waitUntil(
     () => browser.getUrl().endsWith(`/forgot-password`), 
     4000, 'Forgot Password Page',
  );
}

export function resetPswd($: $, email: any, setOtp: any, resetPswd: any) {
   const enterId = $('input[type="email"]');
   const clickToGetOTP = $('button[id="send-otp-forgot-password"]');
   enterId.setValue(email);
   clickToGetOTP.click();
   browser.pause(1000);

   const otp = $('input[id="otp"]');
   otp.setValue(setOtp);
   browser.pause(1000);

   const setPswd = $('input[id="password"]');
   const confirmPswd = $('input[id="confirmpassword"]');
   setPswd.setValue(resetPswd);
   confirmPswd.setValue(resetPswd);
   browser.pause(1000);

   const resetPswdText = $('.intro');
   resetPswdText.getText().should.equal('To reset your password, please verify your email address.');

   const submitNewPswd = $('button[id="change-password-forgot-password"]');
   submitNewPswd.click();
   browser.waitUntil(
     () => browser.getUrl().endsWith(`/login`), 
     5000, 'Password Changed Successfully, Try to Re-login',
  );
  browser.pause(2000);
}
