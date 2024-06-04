
const produtosEmOferta = [
    {
        "id": 1,
        "nome": "Floratta",
        "imagem": "./public/produtos/floratta.png",
        "descricao": "Floratta Flores Secretas é ideal para encher os dias",
        "preco": 155.91
    },
    {
        "id": 2,
        "nome": "Liz Colônia",
        "imagem": "./public/produtos/liz-colonia.webp",
        "descricao": "uma fragrância feminina intensa e marcante, tra",
        "preco": 155.91
    },
    {
        "id": 3,
        "nome": "Floratta",
        "imagem": "./public/produtos/coffe-woman.webp",
        "descricao": "Sua fórmula carrega o equilíbrio entre Madeira ",
        "preco": 155.91
    },
    {
        "id": 4,
        "nome": "Ma Chérie Jeans",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_985550-MLU72701407838_112023-O.webp",
        "descricao": " assim, tão confortável quanto usar aquela peça de roupa",
        "preco": 155.91
    }
];


const carrossel = document.querySelector('.carrossel');

        // Itera sobre cada produto no JSON
        produtosEmOferta.forEach(produto => {
            // Cria a div de produto
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.id = `produto-${produto.id}`;

            // Adiciona o conteúdo HTML à div de produto
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

            // Adiciona a div de produto ao carrossel
            carrossel.appendChild(produtoDiv);
        });