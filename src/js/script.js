// função padrao pra injetar html
function carregarComponente (idContainer, caminhoArquivo) {
    fetch(caminhoArquivo)
        .then(resposta => resposta.text())
        .then(html => {
            document.getElementById(idContainer).innerHTML = html;
        })
        .catch(erro => console.error(`Erro ao carregar ${caminhoArquivo}:`, erro));
}

// chamada de função
carregarComponente('header-container', 'components/header.html');
carregarComponente('hero-container', 'components/hero.html');
carregarComponente('highlights-container', 'components/highlights.html');
carregarComponente('category-container', 'components/category.html');