var loginPage = require('../pages/loginPage');
describe('Bento login page', function() {
  it('should populate info and login', function() {
    loginPage.enterEmail('nabil.baalbaki+stage1@bento4.biz');
    loginPage.enterPassword('Password1');

    loginPage.clickSignInButton();
  });
});