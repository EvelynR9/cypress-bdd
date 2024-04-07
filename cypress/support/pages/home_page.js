// 3- Criar as ações da page

/// <reference types="cypress" />

export default {
    acessLogin(){
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()
            //.wait(3000)
        //cy.screenshot('Tela Login')
    },

    accessRegisterScreen(){
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
            //.wait(3000)
        //cy.screenshot('Tela Login')
    }
}