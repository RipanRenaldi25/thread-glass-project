/**
 * test case scenario
 * Should Show Login Page correctly
 * Should show alert "email" is required when email input is empty
 * Should show alert "email" must be a valid email when email input is doesnt have @
 * should show alert "password" is not allowed to be empty when password is empty
 * Should navigate to register page when sign up now button is clicked
 */

describe('Login Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should Show Login Page correctly', () => {
    cy.get('input[placeholder *= "Email"]').should('be.visible');
    cy.get('span').contains('Password').should('be.visible');
    cy.get('button').contains('Log In').should('be.visible');
  });

  it('Should show alert "email" is required when email input is empty', () => {
    cy.get('button').contains('Log In').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is required');
    });
  });

  it('Should show alert "email" must be a valid email when email input is doesnt have @', () => {
    cy.get('input[placeholder *= "Email"]').type('asdasd');
    cy.get('button').contains('Log In').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should show alert "password" is not allowed to be empty when password is empty', () => {
    cy.get('input[placeholder *= "Email"]').type('ripan@gmail.com');
    cy.get('button').contains('Log In').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is required');
    });
  });
  it('Should navigate to register page when sign up now button is clicked', () => {
    cy.get('a[href *= "/signup"]').click();
    cy.get('input[placeholder *= "John Doe"]').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  });
});
