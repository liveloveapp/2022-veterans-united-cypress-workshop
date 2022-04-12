describe('Login Page', () => {
  it('should show "Login" in the header', () => {
    cy.visit('/');

    cy.get('h3').contains('Login');
  });

  it('should show two input elements', () => {
    cy.visit('/');

    cy.get('form').find('input').should('have.length', 2);
  });
});
