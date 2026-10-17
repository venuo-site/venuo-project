// importa as funções dos modulos
import { carregarComponente, navegarPara } from './navegacao.js';
import { abrirModalLogin, fecharModalLogin } from './auth.js';
import { inicializarNavegacaoPerfil} from './perfil.js';

// torna as funções globais para o html enxergar os onclicks
window.navegarPara = navegarPara;
window.abrirModalLogin = abrirModalLogin;
window.fecharModalLogin = fecharModalLogin;
window.inicializarNavegacaoPerfil = inicializarNavegacaoPerfil;

// --- FUNÇÕES DO MODAL DE FILTROS ---

// Função para alternar a abertura e fechamento do modal de filtros pelo botão "+"
function abrirModalFiltros() {
    const container = document.getElementById('filtros-container');

    if (container) {
        // Se o modal já estiver visível, nós o fechamos e limpamos
        if (container.style.display === 'block' || container.style.display === 'flex') {
            container.style.display = 'none';
            container.innerHTML = '';
        } else {
            // Caso contrário, abrimos e carregamos o conteúdo
            container.style.display = 'block'; 

            carregarComponente('filtros-container', 'components/filtros/filtros-busca.html', () => {
                inicializarLogicaFiltros();
            });
        }
    }
}

function fecharModalFiltros() {
    const container = document.getElementById('filtros-container');

    if (container) {
        container.style.display = 'none';
        container.innerHTML = ''; // Limpa o conteúdo ao fechar
    }
}

// Lógica de interação interna dos elementos do Modal de Filtros
function inicializarLogicaFiltros() {
    const btnToggleMais = document.getElementById('btn-toggle-mais-estilos');
    const iconeToggle = document.getElementById('icone-toggle-estilos');
    
    if (btnToggleMais) {
        btnToggleMais.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Alterna a exibição dos itens extras de forma limpa
            const itensExtras = document.querySelectorAll('.extra');
            itensExtras.forEach(item => item.classList.toggle('oculto'));
            
            // Troca o ícone do Font Awesome
            if (iconeToggle) {
                iconeToggle.classList.toggle('fa-plus');
                iconeToggle.classList.toggle('fa-minus');
            }
        });
    }

    // Seleção dos botões de filtro gerais
    const botoesFiltro = document.querySelectorAll('.filtro-opcoes .filtro-btn');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            if (botao.id === 'btn-toggle-mais-estilos') return;

            botao.classList.toggle('filtro-ativo');
        });
    });

    // Botão de limpar seleções
    const btnLimpar = document.getElementById('btn-limpar-filtros');
    if (btnLimpar) {
        btnLimpar.addEventListener('click', (e) => {
            e.preventDefault();
            botoesFiltro.forEach(botao => {
                botao.classList.remove('filtro-ativo');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', async () => { // Mapeamento dos componentes
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
  
  // --- Detalhes do estabelecimento ---
    carregarComponente('detalhes-container', 'components/detalhes/detalhes.html');
  
});