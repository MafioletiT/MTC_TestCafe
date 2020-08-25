import Pagemodel from "../pagemodels/pagemodel-page.js";
import constants from "../constants/constants.js";
import faker from "faker";

fixture`Tests`.page(constants.URL).beforeEach(async (t) => {
  t.fixtureCtx.invalidEmail = `${faker.random.alphaNumeric(10)}@mail.com.br`;
  t.fixtureCtx.randomPassword = faker.random.alphaNumeric(10);
  t.fixtureCtx.validEmail = "tais.mafioleti@teste.com";
  t.fixtureCtx.validPassword = "12345";

  await t.click(Pagemodel.buttonSingin);
});

test("Try to login into the system by sending an empty email field", async (t) => {
  await t
    .click(Pagemodel.buttonSiginLogin)
    .expect(Pagemodel.messageEmailValidation)
    .eql(constants.MESSAGE_EMAIL_REQUIRED);
});

test("Try to login by sending a nonexistent email", async (t) => {
  await t
    .typeText(Pagemodel.inputEmail, t.fixtureCtx.invalidEmail)
    .typeText(Pagemodel.inputPassword, t.fixtureCtx.randomPassword)
    .click(Pagemodel.buttonSiginLogin)
    .expect(Pagemodel.messageEmailValidation)
    .eql(constants.MESSAGE_AUTHENTICATION_FAILED);
});

test("Try to create an account by sending an empty email field", async (t) => {
  await t
    .click(Pagemodel.buttonCreateAccount)
    .expect(Pagemodel.messageCreationAccount)
    .eql(constants.MESSAGE_INVALID_EMAIL);
});

test("Try to create an account by sending an existent email", async (t) => {
  await t
    .typeText(Pagemodel.inputEmailCreate, t.fixtureCtx.validEmail)
    .click(Pagemodel.buttonCreateAccount)
    .expect(Pagemodel.messageCreationAccount)
    .eql(constants.MESSAGE_DUPLICITY);
});

test("Recover password", async (t) => {
  await t
    .click(Pagemodel.buttonForgotPassword)
    .typeText(Pagemodel.inputEmail, t.fixtureCtx.validEmail)
    .click(Pagemodel.buttonSiginLogin)
    .click(Pagemodel.buttonRetrievePass)
    .expect(Pagemodel.messageConfirmationSendingEmail)
    .eql(`${constants.MESSAGE_CONFIRMATION} ${t.fixtureCtx.validEmail}`);
});
