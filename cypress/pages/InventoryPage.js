class InventoryPage {

    verifyUrl() {
        cy.url().should('include', 'inventory')
    }

    verifyProductsVisible() {
        cy.get('.inventory_item').should('have.length.greaterThan', 0)
    }

    openFirstProduct() {
        cy.get('.inventory_item_name').first().click()
    }
}

export default InventoryPage