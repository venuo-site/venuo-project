// NAVEGAÇÃO DAS ABAS DO PERFIL

export function inicializarNavegacaoPerfil() {
    // Botões de navegação
    const abaFavoritos = document.getElementById("perfil-aba-favoritos");
    const abaHistorico = document.getElementById("perfil-aba-historico");
    const abaConfiguracoes = document.getElementById("perfil-aba-configuracoes");

    // Seções do perfil
    const listaFavoritos = document.getElementById("secao-favoritos");
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
            secao.style.display = "block";
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