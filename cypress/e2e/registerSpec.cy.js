/**
 * test case scenario
 * Should show register page correctly
 * Should Alert "name" is required when name is empty
 * Should alert "email" is required when email is empty
 * Should alert "email" must be a valid email when email is invalid
 * Should alert "password" is required when password is empty
 * should clear all input when button register is clicked
 * should navigate to / when a login is clicked
 */

describe('Register Page Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });
  it('Should show register page correctly', () => {
    cy.get('input[placeholder *= "John Doe"]').should('be.visible');
    cy.get('input[placeholder *= "Email"]').should('be.visible');
    cy.get('span').contains('Password').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  });
  it('Should Alert "name" is required when name is empty', () => {
    cy.get('button').contains('Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is required');
    });
  });
  it('Should alert "email" is required when email is empty', () => {
    cy.get('input[placeholder *= "John Doe"]').type('Ripan Renaldi');
    cy.get('button').contains('Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is required');
    });
  });
  it('Should alert "email" must be a valid email when email is invalid', () => {
    cy.get('input[placeholder *= "John Doe"]').type('Ripan Renaldi');
    cy.get('input[placeholder *= "Email"]').type('asdasd');
    cy.get('button').contains('Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });
  it('Should alert "password" is required when password is empty', () => {
    cy.get('input[placeholder *= "John Doe"]').type('Ripan Renaldi');
    cy.get('input[placeholder *= "Email"]').type('asdasd@gmail.com');
    cy.get('button').contains('Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is required');
    });
  });
  it('should clear all input when button register is clicked', () => {
    cy.get('input[placeholder *= "John Doe"]').type('Ripan Renaldi');
    cy.get('input[placeholder *= "Email"]').type('asdasd@gmail.com');
    cy.get('button').contains('Register').click();
    cy.get('input[placeholder *= "John Doe"]').should('be.empty');
    cy.get('input[placeholder *= "Email"]').should('be.empty');
  });
  it('should navigate to / when a login is clicked', () => {
    cy.get('a').contains('Login').click();
    cy.on('url:changed', (url) => {
      expect(url).to.equal('http://localhost:3000/');
    });
  });
});
