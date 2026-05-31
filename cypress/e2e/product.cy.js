import InventoryPage from '../pages/InventoryPage'
import ProductPage from '../pages/ProductPage'

const inventory = new InventoryPage()
const product = new ProductPage()

describe('Product Navigation', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    it('should open product page', () => {

        inventory.openFirstProduct()

        product.verifyProductDetails()
    })

})