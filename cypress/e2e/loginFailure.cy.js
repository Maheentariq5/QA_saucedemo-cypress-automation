import LoginPage from '../pages/LoginPage'

const login = new LoginPage()

describe('Login Failure Scenario', () => {

    it('should show error for invalid login', () => {

        login.visit()

        login.enterUsername('wrong_user')

        login.enterPassword('wrong_pass')

        login.clickLogin()

        login.getError()
            .should('be.visible')
            .and('contain', 'Username and password do not match')
    })

})