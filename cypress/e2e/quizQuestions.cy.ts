describe('Quiz Questions', () => {

  it('should display a card on the screen if data is retrieved', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').click()
    cy.get('.card').should('be.visible')
  })

  it('should display a question on screen after the Start Quiz button is hit', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').click()
    cy.get('h2').should('exist')
  })
})