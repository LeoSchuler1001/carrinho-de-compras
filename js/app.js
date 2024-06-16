//elementos que devem ficar fora das funções, para não serem ativadas ao clicar os botões
let totalGeral = 0;
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('lista-produtos').innerHTML = '';

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    //atualizar o valor total da compra 
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar(){
    //limpar todos os campos
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = '';
}