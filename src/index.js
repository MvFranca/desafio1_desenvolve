async function fetchProdutos() {
    try {

        const response = await fetch('http://localhost:3000/api/produtos');
        const produtosEmOferta = await response.json();

        const carrossel = document.querySelector('.carrossel');

  
        produtosEmOferta.forEach(produto => {

            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.id = `produto-${produto._id}`;


            produtoDiv.innerHTML = `
                <div class="desconto">50% OFF</div>
                <div class="image-product">
                    <img src=${produto.imagem} alt="${produto.nome}">
                </div>
                <div class="descricao-product">
                    <div class="informacoes">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}...</p>
                    </div>
                    <div class="valor-produtos">
                        <s>R$ ${produto.preco.toFixed(2)}</s>
                        <span>R$ ${(produto.preco * 0.5).toFixed(2)}</span>
                    </div>
                </div>
            `;


            carrossel.appendChild(produtoDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}


fetchProdutos();


// const carrossel = document.querySelector('.carrossel');


//         produtosEmOferta.forEach(produto => {

//             const produtoDiv = document.createElement('div');
//             produtoDiv.classList.add('produto');
//             produtoDiv.id = `produto-${produto.id}`;


//             produtoDiv.innerHTML = `
//                 <div class="desconto">50% OFF</div>
//                 <div class="image-product">
//                     <img src=${produto.imagem} alt="${produto.nome}">
//                 </div>
//                 <div class="descricao-product">
//                     <div class="informacoes">
//                         <h3>${produto.nome}</h3>
//                         <p>${produto.descricao}...</p>
//                     </div>
//                     <div class="valor-produtos">
//                         <s>R$ ${produto.preco.toFixed(2)}</s>
//                         <span>R$ ${(produto.preco * 0.5).toFixed(2)}</span>
//                     </div>
//                 </div>
//             `;


//             carrossel.appendChild(produtoDiv);
//         });