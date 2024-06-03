function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


// let username = prompt("Digite um nome de usuário: ");

// let senha = prompt("digite a sua senha");


// if (username == "admin" && senha == "senha123"){
//     console.log("login bem sucedido!")
// }
// else {
//     console.log("voce nao tem permissao de acesso!")
// }


function solicitarOrcamento(event) {
    // Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar a requisição para a API
    // Método HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        // CASO SUCESSO
        .then(resposta => {
            console.log(resposta);

            // Limpar os inputs
            document.querySelector("#contato form").reset()

            // Mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso!!! 👍")
        })
        // CASO ERRO
        .catch(erro => {
            console.log(erro);
            // Mostrar alert com msg de erro
            alert("Erro na requisição 😢")
        })

    event.preventDefault()
}

// Carregamento dinâmico dos cases
let listaCases = []

function renderizarCases() {
    // Encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    // Variavel para guardar o html dos cases montados
    let template = ""

    // Para cada case da listaCases
    listaCases.forEach(cardCase => {
        // Montar o html do card, passando os atributos do case
        template += `<div class="card">
            <img src=${cardCase.imagem} alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>
        </div>`
    })

    // Inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}

function carregarCases() {
    // Método HTTP GET - Read/Leitura - Serve para mostrar um item ou uma lista de itens
    fetch("http://localhost:3000/cases")
        // Deserialization - Desserialização
        .then((resposta) => resposta.json())
        .then((dadosTratados) => {
            console.log(dadosTratados)
            listaCases = dadosTratados
            renderizarCases()
        })
}

// const objs = [
//     {
//         "cases": [
//             {
//               "imagem": "https://unsplash.it/600/400?image=14",
//               "descricao": "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
//             },
//             {
//               "imagem": "https://unsplash.it/600/400?image=41",
//               "descricao": "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
//             },
//             {
//               "imagem": "https://unsplash.it/600/400?image=23",
//               "descricao": "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking."
//             },
//             {
//               "imagem": "https://unsplash.it/600/400?image=62",
//               "descricao": "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico."
//             },
//           ],
//     },
// ]

// console.log(objs)


// const jsonData = JSON.stringify(objs)