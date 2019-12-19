var loginPage = require('../pages/initialPages/loginPage');
var signUpPage = require('../pages/initialPages/signupPage')

describe('Bento login page', function() {
  it('should populate info and login', function() {
    loginPage.enterEmail('nabil.baalbaki+stage1@bento4.biz');
    loginPage.enterPassword('Password1');

    loginPage.clickSignUpLink();
    signUpPage.enterFirstName('FirstName');
    signUpPage.enterLastName('LastName');
    signUpPage.enterRegBizName('Bizz');
    signUpPage.enterCompanyPhone('1234567890');
    signUpPage.enterPromoCode('007');
    signUpPage.enterEmail('testautomation@sharklasers.com');
    signUpPage.confirmEmail('testautomation@sharklasers.com');
    signUpPage.enterPassword('Password1');
    signUpPage.confirmPassword('Password1');
    signUpPage.checkElectronicCommsAck();
    signUpPage.checkDepositAccAckCheckbox();
    signUpPage.clickTos();

    browser.pause();
  });
});