/* Desafio 5: Sistema Completo de Carrinho de Compras

Crie um sistema de e-commerce com:

1. Array de produtos disponíveis (mínimo 15 produtos) contendo:
   - id
   - nome
   - preco
   - categoria
   - estoque

2. Objeto carrinho com:
   - itens (array de objetos com: produto, quantidade)
   - métodos:
     * adicionarItem(idProduto, quantidade) - verifica estoque antes de adicionar
     * removerItem(idProduto)
     * atualizarQuantidade(idProduto, novaQuantidade)
     * calcularSubtotal() - soma de todos os itens
     * calcularDesconto() - aplica descontos por regras:
       - Compras acima de R$ 200: 10% de desconto
       - Compras acima de R$ 500: 15% de desconto
       - Se tiver 3+ itens da categoria "Eletrônicos": 5% adicional
     * calcularTotal() - subtotal menos desconto
     * finalizarCompra() - exibe resumo completo e atualiza estoque dos produtos
     * listarItens() - mostra todos os itens do carrinho formatados

3. Simule uma compra completa:
   - Adicione vários produtos
   - Remova algum item
   - Atualize quantidade de algum item
   - Finalize a compra mostrando o resumo detalhado

Desafio extra: Adicione validações para evitar estoque negativo e quantidades inválidas.
*/
