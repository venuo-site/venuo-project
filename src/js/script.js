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