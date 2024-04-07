/// <reference types="cypress" />

export default {
    doRegister(){
        cy.get('#btnRegister')
            .wait(3000)
            .click()
        },

    checkErrorMessage(message){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', message)
                //.wait(3000)
            //cy.screenshot('TelaErrorMessageLogin')        
        },

    fillName(name){
        cy.get('#user')
            .type(name)
        }

    
    }