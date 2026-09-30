// Função padrão para injetar HTML
function carregarComponente(idContainer, caminhoArquivo, callback) {
    const container = document.getElementById(idContainer);
    
    // Trava de segurança: se a div não existe na página atual, interrompe
    if (!container) return;

    fetch(caminhoArquivo)
        .then(resposta => {
            if (!resposta.ok) throw new Error(`Erro ao carregar ${caminhoArquivo}`);
            return resposta.text();
        })
        .then(html => {
            container.innerHTML = html;
            if (callback) callback(); // Executa o código extra após o HTML estar na tela
        })
        .catch(erro => console.error(`[Venuo Modular] Erro:`, erro));
}

function navegarPara(idContainerDestino, caminhoArquivo) {
    // pega todos os elementos com a classe 'view-container' no index.html
    const todasAsTelas = document.querySelectorAll('.view-container');

    // faz um loop e esconde todas as telas de uma vez só 
    todasAsTelas.forEach(tela => {
        tela.style.display = 'none';
    })

    // pega o container destino (a tela que o usuario quer ver) e revela
    const containerDestino = document.getElementById(idContainerDestino);
    if (containerDestino) {
        containerDestino.style.display = 'block';
    }

    // faz o fetch do fragmento html e injeta na tela revelada
    carregarComponente(idContainerDestino, caminhoArquivo);
}

// Mapeamento dos componentes
document.addEventListener('DOMContentLoaded', () => {
// carregarComponente('id-do-container', 'caminho/do/container.html')

  // --- GLOBAIS (Executados em todas as telas que contêm as divs) ---
  carregarComponente('header-container', 'components/global/header.html');
  carregarComponente('footer-container', 'components/global/footer.html');

  // --- HOMEPAGE (index.html) ---
  carregarComponente('hero-container', 'components/homepage/hero.html');
  carregarComponente('highlights-container', 'components/homepage/highlights.html');
  carregarComponente('categories-container', 'components/homepage/categories.html');

  // --- RESULTADOS ---
  carregarComponente('results-container', 'components/results/results.html');

  // --- SOBRE ---
  carregarComponente('about-container', 'components/about/about.html');


});