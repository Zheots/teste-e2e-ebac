/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
const dados = require('../fixtures/dados.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      produtosPage.buscarProduto('Helena Hooded Fleece')
      produtosPage.addProdutoCarrinho('S' , 'Blue' , 2)
      cy.get('.woocommerce-message').should('exist')

      produtosPage.buscarProduto2(' Augusta Pullover Jacket')
      produtosPage.addProdutoCarrinho('M' , 'Orange' , 1)
      cy.get('.woocommerce-message').should('exist')

      produtosPage.buscarProduto2('Apollo Running Short')
      produtosPage.addProdutoCarrinho('33' , 'Black' , 1)
      cy.get('.woocommerce-message').should('exist')

      produtosPage.buscarProduto2('Abominable Hoodie')
      produtosPage.addProdutoCarrinho('XL' , 'Red' , 1)
      cy.get('.woocommerce-message').should('exist')

      cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
      cy.get('.checkout-button').click()
      cy.preencheDados(dados.nome , dados.sobrenome , dados.pais , dados.endereco , dados.cidade , dados.estado , dados.cep , dados.telefone , dados.email)
      cy.get('#place_order').should('exist')
      cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
  });

})