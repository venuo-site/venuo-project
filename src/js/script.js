// importa as funções dos modulos
import { carregarComponente, navegarPara } from './navegacao.js';
import { abrirModalLogin, fecharModalLogin } from './auth.js';

// torna as funções globais para o html enxergar os onclicks
window.navegarPara = navegarPara;
window.abrirModalLogin = abrirModalLogin;
window.fecharModalLogin = fecharModalLogin;

document.addEventListener('DOMContentLoaded', () => { // Mapeamento dos componentes
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