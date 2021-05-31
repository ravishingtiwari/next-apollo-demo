describe('Landing page spec', () => {
  it('Visit the page', () => {
    cy.visit('https://contact-client-rt.herokuapp.com/')
    cy.scrollTo('bottom')
    cy.contains('Load more').click()
  })
});
