const apiUrl = 'http://localhost:3002/api';
const apiUrl = 'http://localhost:3002/api';

async function cadastrarProduto(event) {
    event.preventDefault();
    const nomeProduto = document.querySelector('#nome').value;
    const precoProduto = document.querySelector('#preco').value;
    const descricao = document.querySelector('#descricao').value;
    const qtdDisponivel = document.querySelector('#quantidade').value;

    const response = await fetch(`${apiUrl}/produto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nomeProduto, precoProduto, descricao, qtdDisponivel })
    });

    if (response.ok) {
        const result = await response.json();
        if (result.sucesso) {
            alert(result.message);
            location.reload();
        } else {
            alert(result.message + ": " + result.erro);
        }
    } else {
        alert(`Erro HTTP: ${response.status}`);
    }
}


async function buscarProdutos() {
    const response = await fetch(`${apiUrl}/produtos`);

    if (response.ok) {
        const result = await response.json();
        if (result.sucesso) {
            const produtos = result.data;
            const tabela = document.getElementById('produtos-tabela');
            tabela.innerHTML = '';

            produtos.forEach(produto => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${produto.nomeProduto}</td>
                    <td>R$ ${produto.precoProduto}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.qtdDisponivel}</td>
                    <td>
                        <a class="btn btn-warning btn-sm">Editar</a>
                        <a class="btn btn-danger btn-sm" onclick="removerProduto(${produto.id})">Remover</a>
                    </td>
                `;

                tabela.appendChild(row);
            });
        } else {
            alert(result.message + ": " + result.erro);
        }
    } else {
        alert(`Erro HTTP: ${response.status}`);
    }
}

