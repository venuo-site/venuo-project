export function abrirModalLogin() { // abre o modal de login flutuante sobre a tela atual
    const container = document.getElementById('login-container');
    if (container) {
        container.style.display = 'flex'; // exibe o overlay aplicando flex para centralizar a caixa na tela
        carregarComponente('login-container', 'components/login/login.html'); // carrega o conteudo do login de forma dinamica
    }
}
export function fecharModalLogin() {
    const container = document.getElementById('login-container');
    if (container) {
        container.style.display = 'none' // esconde o modal
        container.innerHTML = ''; // limpa o html interno pra reiniciar limpo na próxima vez que for aberto
    }
}
