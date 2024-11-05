import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('a button to start the quiz should appear on initial load', () => {
  it('renders', () => {
    cy.mount(<Quiz />)

    cy.get('button').contains('contain', 'Start Quiz')
  })
})