// Função padrão para injetar HTML
export function carregarComponente(idContainer, caminhoArquivo, callback) {
    const container = document.getElementById(idContainer);    

    if (!container) return; // Trava de segurança: se a div não existe na página atual, interrompe
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
export function navegarPara(idContainerDestino, caminhoArquivo) {
    const todasAsTelas = document.querySelectorAll('.view-container'); // pega todos os elementos com a classe 'view-container' no index.html
    
    todasAsTelas.forEach(tela => { // faz um loop e esconde todas as telas de uma vez só 
        tela.style.display = 'none';
    })
    
    const containerDestino = document.getElementById(idContainerDestino); // pega o container destino (a tela que o usuario quer ver) e revela
    if (containerDestino) {
        containerDestino.style.display = 'block';
    }
    carregarComponente(idContainerDestino, caminhoArquivo); // faz o fetch do fragmento html e injeta na tela revelada
}