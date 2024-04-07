/// <reference types="cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"

Given("I am on register screen", () =>{
    home_page.accessRegisterScreen()
})

Given("I fill name", () =>{
    register_user_page.fillName('Eve')
})

When("I click on Register", () =>{
    register_user_page.doRegister()
})

Then("I see the register error message {string}", (message) =>{
    register_user_page.checkErrorMessage(message)
})
