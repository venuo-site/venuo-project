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

// abre o modal de login flutuante sobre a tela atual
function abrirModalLogin() {
    const container = document.getElementById('login-container');

    if (container) {
        // exibe o overlay aplicando flex para centralizar a caixa na tela
        container.style.display = 'flex';

        // carrega o conteudo do login de forma dinamica
        carregarComponente('login-container', 'components/login/login.html');
    }
}

function fecharModalLogin() {
    const container = document.getElementById('login-container');

    if (container) {
        container.style.display = 'none' // esconde o modal
        container.innerHTML = ''; // limpa o html interno pra reiniciar limpo na próxima vez que for aberto
    }
}


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