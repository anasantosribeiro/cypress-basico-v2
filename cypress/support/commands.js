Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('ana_teste@cypress.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})