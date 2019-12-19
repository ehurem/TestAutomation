var loginPage = function() {
    var emailInput = element(by.css('input[name=loginName]'));
    var passwordInput = element(by.css('input[name=password]'));
    var signInButton = element(by.buttonText('Sign In'));
    var resetPasswordLink = element(by.buttonText('Reset Password'));
    var signUpLink = element(by.buttonText('Sign up for your free 60-day trial'));

    this.enterEmail = function(email) {
        emailInput.sendKeys(email);
    };
  
    this.enterPassword = function(password) {
        passwordInput.sendKeys(password);
    };

    this.clickSignInButton = function() {
        signInButton.click();
    };

    this.clickResetPasswordLink = function() {
        resetPasswordLink.click();
    };

    this.clickSignUpLink = function() {
        signUpLink.click();
    };

  };
  module.exports = new loginPage();