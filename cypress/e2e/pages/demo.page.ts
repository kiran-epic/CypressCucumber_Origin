class DemoPage {
    async clickOnSearchField() {
        cy.get('#sbtc input').click();
    }

    async visit(path:string) {
        cy.visit(path);
    }
}

export default new DemoPage();