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

// chamada de função - EX:
// carregarComponente('id-do-container', 'caminho/do/container.html')

// Mapeamento dos componentes
document.addEventListener('DOMContentLoaded', () => {

  // --- GLOBAIS (Executados em todas as telas que contêm as divs) ---
  carregarComponente('header-container', 'components/global/header.html');
  carregarComponente('footer-container', 'components/global/footer.html');

  // --- HOMEPAGE (index.html) ---
  carregarComponente('hero-container', 'components/homepage/hero.html');
  carregarComponente('highlights-container', 'components/homepage/highlights.html')
  carregarComponente('categories-container', 'components/homepage/categories.html');

});