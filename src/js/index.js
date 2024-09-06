// passo 1 - pegar elemento html dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

// passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        console.log("clicou");

// passo 3 - desmarcar botão selecionado anterior
        desativarBotaoSelecionado();

// passo 4 - marcar botão clicado como selecionado
        botao.classList.add("selecionado");

// passo 5 - esconder imagem anterior
        esconderImagemAtiva();

// passo 6 - fazer aparecer imagem correspondente do botao selecionado
        imagens[indice].classList.add("ativa");

// passo 7 - esconder informação do dragão anterior selecionado
        esconderInformacoesAtivas();

// passo 8 - mostrar informação referente ao botão selecionado
        informacoes[indice].classList.add("ativa");

    });
});

// para refatorar em funçao > ctrl + shift + R > extract to function in global scope

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
