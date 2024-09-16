Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preencheDados' , (nome , sobrenome , pais , endereco , cidade , estado , cep , telefone , email) =>{
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#select2-billing_country-container').type(pais + '{enter}')
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()
})