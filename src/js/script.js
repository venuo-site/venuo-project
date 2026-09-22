// função padrao pra injetar html
function carregarComponente (idContainer, caminhoArquivo) {
    fetch(caminhoArquivo)
        .then(resposta => resposta.text())
        .then(html => {
            document.getElementById(idContainer).innerHTML = html;
        })
        .catch(erro => console.error(`Erro ao carregar ${caminhoArquivo}:`, erro));
}

// chamada de função - EX:
// carregarComponente('id-do-container', 'caminho/do/container.html')
carregarComponente('header-container', 'components/homepage/header.html');
carregarComponente('hero-container', 'components/homepage/hero.html');
carregarComponente('highlights-container', 'components/homepage/highlights.html');
carregarComponente('categories-container', 'components/homepage/categories.html');