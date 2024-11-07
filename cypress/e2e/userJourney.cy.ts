describe('Quiz Questions', () => {

  it('should display a Start Quiz button', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').should('have.text', 'Start Quiz')
  })

  it('should display a question on screen after the Start Quiz button is hit', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').click()
    cy.get('h2').should('exist')
  })

  it('display heading with text Quiz Completed when quiz is completed', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').click()

    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(3).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(3).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()

    cy.get('h2').should('have.text', 'Quiz Completed')
  })

  it('should restart the quiz when Take New Quiz button is clicked', () => {
    cy.visit('http://localhost:3000')

    cy.get('button').click()

    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(3).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(3).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()

    cy.get('button').click()

    cy.get('h2').should('exist')
  })
})