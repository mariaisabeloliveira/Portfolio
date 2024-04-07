const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoMostrarMenos = document.querySelector('.btn-mostrar-menos');
const projetosAtivos = document.querySelectorAll('.projeto')

if (projetosAtivos.length > 4) {
    mostrarBotaoMostrarProjetos();
}

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
    BotaoMostrarMenos();
});

botaoMostrarMenos.addEventListener('click', () => {
    BotaoMostrarMenos();
    esconderMostrarMenos();
    esconderProjetos();
    mostrarBotaoMostrarProjetos();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function esconderProjetos() {
    if (projetosAtivos.length > 4) {
        for (let i = 4; i < projetosAtivos.length; i++) {
            projetosAtivos[i].classList.remove('ativo');
        }
    }
}

function BotaoMostrarMenos() {
    botaoMostrarMenos.classList.remove('remover');
}

function esconderMostrarMenos() {
    botaoMostrarMenos.classList.add('remover')
}

function mostrarBotaoMostrarProjetos() {
    botaoMostrarProjetos.classList.remove('remover');
}

botaoMais = Array.from(botaoMostrarProjetos.classList)
botaoMenos = Array.from(botaoMostrarMenos.classList)

console.log ('Mostrar mais:', botaoMais, 'Mostrar Menos: ', botaoMenos)