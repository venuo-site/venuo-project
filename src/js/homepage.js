export function voltarParaHome() {
    // 1. Esconde todas as telas secundárias
    const todasAsTelas = document.querySelectorAll('.view-container');
    todasAsTelas.forEach(tela => {
        tela.style.display = 'none';
    });

    // 2. Reexibe todos os blocos que formam a HomePage
    const hero = document.getElementById('hero-container');
    const results = document.getElementById('results-container');

    if (hero) hero.style.display = 'block';
    if (results) results.style.display = 'block';
}

// Expõe no objeto window para funcionar caso use onclick direto no HTML
window.voltarParaHome = voltarParaHome; 