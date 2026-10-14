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
            console.log(`Conteudo baixado para ${caminhoArquivo}`);
            container.innerHTML = html;
            if (callback) callback(); // Executa o código extra após o HTML estar na tela
        })
        .catch(erro => console.error(`[Venuo Modular] Erro:`, erro));
}

export function navegarPara(idContainerDestino, caminhoArquivo, callbackOpcional) {
    const todasAsTelas = document.querySelectorAll('.view-container');
    
    todasAsTelas.forEach(tela => { 
        tela.style.display = 'none';
    });
    
    const containerDestino = document.getElementById(idContainerDestino);
    
    if (containerDestino) {
        containerDestino.style.display = 'block';
        
        // Verifica se a tela ainda está vazia
        if (containerDestino.innerHTML.trim() === "") {
            // Se estiver vazia, faz o fetch e passa o callback
            carregarComponente(idContainerDestino, caminhoArquivo, callbackOpcional);
        } else {
            // Se o HTML já foi baixado antes, não faz fetch de novo!
            if (callbackOpcional) callbackOpcional();
        }
    }
}