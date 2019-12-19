var signUpPage = function() {
    var firstNameInput = element(by.css('input[name=firstName]'));
    var lastNameInput = element(by.css('input[name=lastName]'));
    var regBizNameInput = element(by.css('input[name=companyName]'));
    var companyPhoneInput = element(by.css('input[name=businessPhone]'));
    var promoCodeInput = element(by.css('input[name=promoCode]'));
    var emailAddressInput = element(by.css('input[name=loginName]'));
    var confirmEmailAddressInput = element(by.css('input[name=loginNameVerify]'));
    var passwordInput = element(by.css('input[name=password]'));
    var confirmPasswordInput = element(by.css('input[name=passwordVerify]'));
    var electronicCommsAckCheckbox = element(by.css('input[name=electronicCommsAck]'));
    var electronicCommsAckLink = element(by.partialLinkText('Electronic Communications'));
    var depositAccAckCheckbox = element(by.css('input[name=depositAccAck]'));
    var depositAccAckLink = element(by.partialLinkText('Deposit Account Agreement'));
    var enrollButton = element(by.buttonText('Enroll'));
    var loginButton = element(by.buttonText('Login'));
    var tosLink = element(by.partialLinkText('Terms'));

    this.enterFirstName = function(firstName) {
        firstNameInput.sendKeys(firstName);
    };
  
    this.enterLastName = function(lastName) {
        lastNameInput.sendKeys(lastName);
    };

    this.enterRegBizName = function(bizName) {
        regBizNameInput.sendKeys(bizName);
    };
  
    this.enterCompanyPhone = function(phoneNumber) {
        companyPhoneInput.sendKeys(phoneNumber);
    };

    this.enterPromoCode = function(promoCode) {
        promoCodeInput.sendKeys(promoCode);
    };

    this.enterEmail = function(email) {
        emailAddressInput.sendKeys(email);
    };

    this.confirmEmail = function(email) {
        confirmEmailAddressInput.sendKeys(email);
    };

    this.enterPassword = function(password) {
        passwordInput.sendKeys(password);
    };

    this.confirmPassword = function(password) {
        confirmPasswordInput.sendKeys(password);
    };

    this.checkElectronicCommsAck = function() {
        electronicCommsAckCheckbox.click();
    };

    this.checkDepositAccAckCheckbox = function() {
        depositAccAckCheckbox.click();
    };

    this.clickElectronicCommsAckLink = function() {
        electronicCommsAckLink.click();
    };

    this.clickDepositAccAckLink = function() {
        depositAccAckLink.click();
    };

    this.clickEnroll = function() {
        enrollButton.click();
    };

    this.clickLogin = function() {
        loginButton.click();
    };

    this.clickTos = function() {
        tosLink.click();
    };

  };
  module.exports = new signUpPage();