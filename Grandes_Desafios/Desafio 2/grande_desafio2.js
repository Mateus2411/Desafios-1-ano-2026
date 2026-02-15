/* 
🟦 GRANDE DESAFIO 2: Mini Loja Virtual

Crie um sistema de loja virtual simples com carrinho de compras.
Utilize TODOS os conceitos: decisões, arrays, repetição, funções e objetos.

DADOS FORNECIDOS (use este array como base):
*/

const produtos = [
    { id: 1, nome: "Mouse Gamer", preco: 120.50, categoria: "Eletrônicos", estoque: 15 },
    { id: 2, nome: "Teclado Mecânico", preco: 350.90, categoria: "Eletrônicos", estoque: 8 },
    { id: 3, nome: "Monitor 24pol", preco: 799.99, categoria: "Eletrônicos", estoque: 5 },
    { id: 4, nome: "Headset", preco: 199.90, categoria: "Eletrônicos", estoque: 12 },
    { id: 5, nome: "Webcam HD", preco: 249.50, categoria: "Eletrônicos", estoque: 7 },
    { id: 6, nome: "Cadeira Gamer", preco: 899.90, categoria: "Móveis", estoque: 3 },
    { id: 7, nome: "Mesa para Computador", preco: 449.99, categoria: "Móveis", estoque: 6 },
    { id: 8, nome: "Mousepad Grande", preco: 79.90, categoria: "Acessórios", estoque: 20 },
    { id: 9, nome: "Hub USB", preco: 64.50, categoria: "Acessórios", estoque: 18 },
    { id: 10, nome: "Cabo HDMI", preco: 34.90, categoria: "Acessórios", estoque: 25 },
    { id: 11, nome: "SSD 480GB", preco: 279.90, categoria: "Eletrônicos", estoque: 10 },
    { id: 12, nome: "Memória RAM 8GB", preco: 179.99, categoria: "Eletrônicos", estoque: 14 },
    { id: 13, nome: "Suporte para Monitor", preco: 119.90, categoria: "Acessórios", estoque: 9 },
    { id: 14, nome: "Luminária LED", preco: 94.50, categoria: "Iluminação", estoque: 11 },
    { id: 15, nome: "Organizador de Cabos", preco: 24.90, categoria: "Acessórios", estoque: 30 }
];

const carrinho = {
    itens: []
};

/*
FUNCIONALIDADES A IMPLEMENTAR:

1. listarProdutos()
   - Mostra todos os produtos disponíveis

2. buscarPorCategoria(categoria)
   - Retorna array com produtos da categoria especificada

3. buscarPorNome(nome)
   - Busca produto pelo nome (pode ser parcial)

4. adicionarAoCarrinho(idProduto, quantidade)
   - Adiciona produto ao carrinho se houver estoque
   - Formato do item: { produto: objetoProduto, quantidade: numero }

5. removerDoCarrinho(idProduto)
   - Remove produto do carrinho

6. visualizarCarrinho()
   - Mostra todos os itens do carrinho com subtotais

7. calcularSubtotal()
   - Retorna a soma de todos os itens (preço × quantidade)

8. calcularDesconto()
   - Compras acima de R$ 200: 10% desconto
   - Compras acima de R$ 400: 15% desconto
   - 5 ou mais itens diferentes: 5% adicional

9. calcularTotal()
   - Retorna subtotal menos desconto

10. finalizarCompra()
    - Mostra resumo completo (itens, subtotal, desconto, total)
    - Atualiza o estoque dos produtos
    - Limpa o carrinho

11. produtosMaisCaros()
    - Retorna os 3 produtos mais caros

12. produtosBaixoEstoque(limite)
    - Retorna produtos com estoque menor ou igual ao limite

AGORA É COM VOCÊ! Implemente as funções acima e teste o sistema.
Exemplo de teste:
- Adicione 3 produtos diferentes ao carrinho
- Visualize o carrinho
- Remova 1 produto
- Finalize a compra
*/
