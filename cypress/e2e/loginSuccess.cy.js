import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

const login = new LoginPage()
const inventory = new InventoryPage()

describe('Login Success Scenario', () => {

    it('should login successfully', () => {

        login.visit()

        login.enterUsername('standard_user')

        login.enterPassword('secret_sauce')

        login.clickLogin()

        inventory.verifyUrl()

        inventory.verifyProductsVisible()
    })

})