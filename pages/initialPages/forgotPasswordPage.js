var forgotPasswordPage = function() {
    var emailInput = element(by.css('input[name=loginName]'));
    var submitButton = element(by.buttonText('Submit'));
    var signupButton = element(by.buttonText('Sign up for your free 60-day trial'));

    this.enterEmail = function(email) {
        emailInput.sendKeys(email);
    };
  
    this.clickSubmit = function() {
        submitButton.click();
    };

    this.clickSignup = function() {
        signupButton.click();
    };

  };
  module.exports = new forgotPasswordPage();