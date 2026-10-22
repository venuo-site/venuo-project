import { carregarComponente } from './navegacao.js';

// --- FUNÇÕES DO MODAL DE FILTROS ---

/**
 * Abre e carrega o modal de filtros dinamicamente dentro do container flutuante
 */
export function abrirModalFiltros() {
    const container = document.getElementById('filtros-container');

    if (container) {
        // Se já estiver visível, fecha e limpa
        if (container.style.display === 'block' || container.style.display === 'flex') {
            fecharModalFiltros();
        } else {
            // Caso contrário, exibe e faz o fetch do componente HTML
            container.style.display = 'block'; 

            carregarComponente('filtros-container', 'components/filtros/filtros-busca.html', () => {
                inicializarLogicaFiltros();
            });
        }
    }
}

/**
 * Fecha o modal de filtros e limpa o seu conteúdo
 */
export function fecharModalFiltros() {
    const container = document.getElementById('filtros-container');

    if (container) {
        container.style.display = 'none';
        container.innerHTML = ''; // Limpa a árvore DOM ao fechar
    }
}

/**
 * Inicializa toda a interatividade interna do Modal (botões, estrelas, switch, etc.)
 */
export function inicializarLogicaFiltros() {
    // 1. Botão de expandir/recolher estilos musicais (+ / -)
    const btnToggleMais = document.getElementById('btn-toggle-mais-estilos');
    const iconeToggle = document.getElementById('icone-toggle-estilos');
    
    if (btnToggleMais) {
        btnToggleMais.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Alterna a exibição dos itens extras
            const itensExtras = document.querySelectorAll('.extra');
            itensExtras.forEach(item => item.classList.toggle('oculto'));
            
            // Troca o ícone entre mais (+) e menos (-)
            if (iconeToggle) {
                iconeToggle.classList.toggle('fa-plus');
                iconeToggle.classList.toggle('fa-minus');
            }
        });
    }

    // 2. Seleção dos botões de filtro gerais (Chips/Pílulas)
    const botoesFiltro = document.querySelectorAll('.filtro-opcoes .filtro-btn');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            if (botao.id === 'btn-toggle-mais-estilos') return;

            botao.classList.toggle('filtro-ativo');
        });
    });

    // 3. Avaliação mínima por estrelas (Seleção em cascata idêntica ao Figma)
    const botoesEstrelas = document.querySelectorAll('.filtro-estrela-btn');
    botoesEstrelas.forEach((estrela, index) => {
        estrela.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Reseta todas as estrelas
            botoesEstrelas.forEach(s => {
                s.classList.remove('filtro-ativo');
                const icone = s.querySelector('i');
                if (icone) {
                    icone.classList.remove('fa-solid');
                    icone.classList.add('fa-regular');
                }
            });

            // Ativa a estrela clicada e todas as anteriores em cascata
            for (let i = 0; i <= index; i++) {
                botoesEstrelas[i].classList.add('filtro-ativo');
                const icone = botoesEstrelas[i].querySelector('i');
                if (icone) {
                    icone.classList.remove('fa-regular');
                    icone.classList.add('fa-solid');
                }
            }
        });
    });

    // 4. Botão de "Limpar Filtros"
    const btnLimpar = document.getElementById('btn-limpar-filtros');
    if (btnLimpar) {
        btnLimpar.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Desmarca os botões gerais
            botoesFiltro.forEach(botao => {
                botao.classList.remove('filtro-ativo');
            });

            // Reseta as estrelas
            botoesEstrelas.forEach(s => {
                s.classList.remove('filtro-ativo');
                const icone = s.querySelector('i');
                if (icone) {
                    icone.classList.remove('fa-solid');
                    icone.classList.add('fa-regular');
                }
            });

            // Reseta o switch "Aberto agora"
            const switchAberto = document.querySelector('#filtros-modal input[type="checkbox"]');
            if (switchAberto) {
                switchAberto.checked = false;
            }
        });
    }
}