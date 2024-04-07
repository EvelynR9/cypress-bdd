

/// <reference types="cypress" />

export default {
    doLogin(){
        cy.get('#btnLogin')
            .wait(4000)
            .click()
        },

    checkErrorMessage(menssage){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', menssage)
            //.wait(3000)
        //cy.screenshot('TelaErrorMessageLogin')        
        },

    fillEmail(email){
        cy.get('#user')
            .type(email)
            //.wait(3000)
        //cy.screenshot('TelaPreencherEmail') 
        },

    fillPassword(password){
        cy.get('#password')
            .type(password)
                //.wait(3000)
            //cy.screenshot('TelaPreencherEmail') 
        },

        checkSuccessMessage(){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
                    //.wait(3000)
                //cy.screenshot('TelaPreencherEmail')
                
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
        }


}