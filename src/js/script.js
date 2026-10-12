function abrirModalLogin() { // abre o modal de login flutuante sobre a tela atual
    const container = document.getElementById('login-container');
    if (container) {
        container.style.display = 'flex'; // exibe o overlay aplicando flex para centralizar a caixa na tela
        carregarComponente('login-container', 'components/login/login.html'); // carrega o conteudo do login de forma dinamica
    }
}
function fecharModalLogin() {
    const container = document.getElementById('login-container');
    if (container) {
        container.style.display = 'none' // esconde o modal
        container.innerHTML = ''; // limpa o html interno pra reiniciar limpo na próxima vez que for aberto
    }
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