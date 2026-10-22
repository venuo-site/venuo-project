// importa as funções dos modulos
import { carregarComponente, navegarPara } from './navegacao.js';
import { abrirModalLogin, fecharModalLogin } from './auth.js';
import { inicializarNavegacaoPerfil} from './perfil.js';
import { dispararNotificacao } from './notificacoes.js';
import { abrirModalFiltros, fecharModalFiltros } from './filtros-busca.js'; // módulo de filtros
import { renderizarFeed, configurarFiltrosAbas, configurarToggleMapa } from './feed.js'; // novo modulo do feed
import { voltarParaHome } from './homepage.js';

// torna as funções globais para o html enxergar os onclicks
window.navegarPara = navegarPara;
window.abrirModalLogin = abrirModalLogin;
window.fecharModalLogin = fecharModalLogin;
window.inicializarNavegacaoPerfil = inicializarNavegacaoPerfil;
window.renderizarFeed = renderizarFeed;
window.configurarFiltrosAbas = configurarFiltrosAbas;
window.configurarToggleMapa = configurarToggleMapa;
window.abrirModalFiltros = abrirModalFiltros;       // Expõe para o botão do Hero
window.fecharModalFiltros = fecharModalFiltros;     // Expõe para o botão "X" do modal
window.voltarParaHome = voltarParaHome;


window.atualizarUsuarioSidebar = function() {
    const avatar = document.querySelector('.user-avatar');
    const nome = document.querySelector('.user-name');
    const acao = document.querySelector('.user-action');

    if (avatar) {
        avatar.innerHTML = '<img src="img/perfil-usuario.png" alt="Foto do perfil">';
    }

    if (nome) {
        nome.textContent = 'João Silva';
    }

    if (acao) {
        acao.textContent = 'Ver perfil';
    }
};

document.addEventListener('DOMContentLoaded', async () => { // Mapeamento dos componentes
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
        configurarToggleMapa(); // ativa o botao do mapa lá
    });

// --- SOBRE ---
    carregarComponente('about-container', 'components/about/about.html');

// --- PERFIL
    carregarComponente(
        'perfil-container',
        'components/perfil/perfil.html',
        inicializarNavegacaoPerfil
    );

// --- Detalhes do estabelecimento ---
    carregarComponente('detalhes-container', 'components/detalhes/detalhes.html');
    
// ===> NOVO: Gatilhos automáticos dentro da carga inicial <===
    setTimeout(() => { dispararNotificacao("🎸 Show Acústico Próximo", "Música ao vivo começando agora no <strong>Cajuína Bar!</strong> Apenas 1,7km de você.", "fa-solid fa-music"); }, 3000);
    setTimeout(() => { dispararNotificacao("🍻 Happy-Hour Rolando!", "O <strong>Madalena Gastrobar</strong> liberou chopp em dobro até as 20h. Não perca!", "fa-solid fa-beer-mug-empty"); }, 7000);  
});
