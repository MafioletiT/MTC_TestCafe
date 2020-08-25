import { Selector, t } from "testcafe";

const button = Selector("button");

class Pagemodel {
  get buttonSingin() {
    return Selector(".login");
  }

  get buttonSiginLogin() {
    return Selector("#SubmitLogin");
  }

  get buttonCreateAccount() {
    return Selector("#SubmitCreate");
  }

  get inputEmail() {
    return Selector("#email");
  }

  get inputPassword() {
    return Selector("#passwd");
  }

  get messageEmailValidation() {
    return Selector("#center_column > div.alert.alert-danger > ol > li")
      .innerText;
  }

  get messageCreationAccount() {
    return Selector("#create_account_error > ol > li").innerText;
  }

  get messageConfirmationSendingEmail() {
    return Selector("#center_column > div > p").innerText;
  }

  get inputEmailCreate() {
    return Selector("#email_create");
  }

  get buttonForgotPassword() {
    return button.withText("Forgot your password?");
  }

  get buttonRetrievePass() {
    return button.withText("Retrieve Password");
  }
}

export default new Pagemodel();
