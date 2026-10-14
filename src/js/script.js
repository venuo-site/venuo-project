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

 // --- PERFIL ---
  carregarComponente('perfil-container', 'components/perfil/perfil.html', inicializarNavegacaoPerfil);

 
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


});