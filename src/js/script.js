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

 // --- PERFIL
  carregarComponente('perfil-container', 'components/perfil/perfil.html', inicializarNavegacaoPerfil);

});

 //NAVEGAÇÃO DAS ABAS DO PERFIL

function inicializarNavegacaoPerfil() {
    // Botões de navegação
    const abaFavoritos = document.getElementById("perfil-aba-favoritos");
    const abaHistorico = document.getElementById("perfil-aba-historico");
    const abaConfiguracoes = document.getElementById("perfil-aba-configuracoes");

    // Seções do perfil
    const listaFavoritos = document.getElementById("lista-favoritos");
    const listaHistorico = document.getElementById("lista-historico");
    const configuracoes = document.getElementById("configuracoes-perfil");

    // Verifica se os elementos existem
    if (
        !abaFavoritos || !abaHistorico || !abaConfiguracoes ||
        !listaFavoritos || !listaHistorico || !configuracoes
    ) {
        console.error("Não foi possível inicializar as abas do perfil.");
        return;
    }

    // Exibe somente a seção selecionada
    function mostrarSecao(secao, abaSelecionada) {
        listaFavoritos.style.display = "none";
        listaHistorico.style.display = "none";
        configuracoes.style.display = "none";

        listaFavoritos.hidden = true;
        listaHistorico.hidden = true;
        configuracoes.hidden = true;

        secao.hidden = false;

        if (secao === listaFavoritos) {
            secao.style.display = "grid";
        } else if (secao === listaHistorico) {
            secao.style.display = "flex";
        } else {
            secao.style.display = "grid";
        }

        // Atualiza a aba selecionada
        [abaFavoritos, abaHistorico, abaConfiguracoes].forEach((aba) => {
            aba.classList.remove("profile-navigation__tab--active");
        });

        abaSelecionada.classList.add("profile-navigation__tab--active");
    }

    // Eventos dos botões
    abaFavoritos.addEventListener("click", () => {
        mostrarSecao(listaFavoritos, abaFavoritos);
    });

    abaHistorico.addEventListener("click", () => {
        mostrarSecao(listaHistorico, abaHistorico);
    });

    abaConfiguracoes.addEventListener("click", () => {
        mostrarSecao(configuracoes, abaConfiguracoes);
    });

    // Abre Favoritos inicialmente
    mostrarSecao(listaFavoritos, abaFavoritos);
}