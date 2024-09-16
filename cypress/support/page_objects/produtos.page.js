class ProdutosPage{

    buscarProduto(nomeProduto){
        cy.get('[class="zmdi zmdi-search"]').eq(2).click()
        cy.get('[name="s"]').eq(2).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(2).click()
    }

    buscarProduto2(nomeProduto){
        cy.get('[class="zmdi zmdi-search"]').eq(2).click()
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()
    }

    addProdutoCarrinho(tamanho , cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click().click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage()