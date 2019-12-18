var loginPage = function() {
    var emailInput = element(by.css('input[name=loginName]'));
    var passwordInput = element(by.css('input[name=password]'));
    var signInButton = element(by.buttonText('Sign In'));

    this.enterEmail = function(email) {
        emailInput.sendKeys(email);
    };
  
    this.enterPassword = function(password) {
        passwordInput.sendKeys(password);
    };

    this.clickSignInButton = function() {
        signInButton.click();
    };

  };
  module.exports = new loginPage();