describe('Login Page', () => {
  it('should show "Login" in the header', () => {
    cy.visit('/');

    cy.get('h3').contains('Login');
  });

  it('should show two input elements', () => {
    cy.visit('/');

    cy.get('form').find('input').should('have.length', 2);
  });

  it('should log the user in when providing valid credentials', () => {
    cy.visit('/');

    cy.get('bco-login-form')
      .find('[data-test-id="usernameInput"]')
      .type('Admin');

    cy.get('bco-login-form')
      .find('[data-test-id="passwordInput"]')
      .type('password');

    cy.get('bco-login-form').find('[data-test-id="loginButton"]').click();
  });
});
