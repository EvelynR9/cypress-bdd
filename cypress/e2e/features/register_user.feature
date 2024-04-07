Feature: Register User
    Eu como cliente 
    Quero me cadastrar na aplicação 
    Para fazer um pedido de compra 

    Background: Access register screen
        Given I am on register screen 
        
    
    Scenario: Campo nome vazio 
        When I click on Register
        Then I see the register error message "O campo nome deve ser prenchido" 
        
    
    Scenario: Campo e-mail vazio  
        And I fill name 
        When I click on Register
        Then I see the register error message "O campo e-mail deve ser prenchido corretamente" 

    Scenario: Campo e-mail inválido  
        And I fill name
        And I fill e-mail "invalidEmail" 
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" in register

    Scenario: Campo senha vazio  
        And I fill name
        And I fill e-mail "eve.123@gmail.com" 
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" in register

    Scenario: Campo senha inválido  
        And I fill name
        And I fill e-mail "eve.123@gmail.com"
        And I fill senha "123" 
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" in register
    Scenario: Cadastro de usuário com sucesso  
        And I fill my datas of register 
        When I click on Register
        Then I see the success message on register 