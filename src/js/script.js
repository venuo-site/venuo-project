// importa as funções dos modulos
import { carregarComponente, navegarPara } from './navegacao.js';
import { abrirModalLogin, fecharModalLogin } from './auth.js';
import { renderizarFeed, configurarFiltrosAbas } from './feed.js'; // novo modulo do feed

// torna as funções globais para o html enxergar os onclicks
window.navegarPara = navegarPara;
window.abrirModalLogin = abrirModalLogin;
window.fecharModalLogin = fecharModalLogin;
window.renderizarFeed = renderizarFeed;
window.configurarFiltrosAbas = configurarFiltrosAbas;

document.addEventListener('DOMContentLoaded', () => { // Mapeamento dos componentes
// carregarComponente('id-do-container', 'caminho/do/container.html')

  // --- GLOBAIS (Executados em todas as telas que contêm as divs) ---
  carregarComponente('header-container', 'components/global/header.html');
  carregarComponente('footer-container', 'components/global/footer.html');

  // --- HOMEPAGE (index.html) ---

  // injeta o hero e logo depois configura as abas de filtro
  carregarComponente('hero-container', 'components/homepage/hero.html', () => {
    configurarFiltrosAbas();
  });

  // carregarComponente('highlights-container', 'components/homepage/highlights.html');
  // carregarComponente('categories-container', 'components/homepage/categories.html');

  // --- RESULTADOS ---
  // injeta os resultados e logo depois renderiza os cards mockados
  carregarComponente('results-container', 'components/results/results.html', () => {
    renderizarFeed("Todos");
  });

  // --- SOBRE ---
  carregarComponente('about-container', 'components/about/about.html');

  // --- Detalhes do estabelecimento ---
  carregarComponente('detalhes-container', 'components/detalhes/detalhes.html');
  
});