/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('SignUp page', () => {
  it('should signup sucessfully', () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password()
    };

    cy.visit('http://localhost:3000/sign-up');
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#confirmPassword').type(user.password);

    cy.contains('Cadastre-se').click();
    cy.contains('Cadastrado efetuado com sucesso!');
  });
});
