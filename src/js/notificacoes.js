// 1. INJETA O ESTILO DO TOAST
const estiloToast = document.createElement('style');
estiloToast.innerHTML = `
#toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 999999; display: flex; flex-direction: column; gap: 12px; pointer-events: none; }
.venuo-toast { background-color: #132738; color: #ffffff; border-left: 4px solid #ff6b35; padding: 16px 20px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 14px; max-width: 350px; pointer-events: auto; cursor: pointer; transition: transform 0.4s ease-out, opacity 0.4s ease-out; transform: translateX(120%); opacity: 0; }
.toast-icone { color: #ff6b35; font-size: 1.5rem; }
.toast-conteudo h4 { margin: 0 0 4px 0; font-size: 0.95rem; font-weight: 700; }
.toast-conteudo p { margin: 0; font-size: 0.85rem; color: #a0aab2; line-height: 1.3; }
`;
document.head.appendChild(estiloToast);

// 2. FUNÇÃO QUE CRIA A NOTIFICAÇÃO
export function dispararNotificacao(titulo, mensagemHTML, icone = 'fa-solid fa-bell') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'venuo-toast';

    toast.addEventListener('click', () => {
        toast.remove();
        if (typeof window.navegarPara === 'function') {
            window.navegarPara('detalhes-container', 'components/detalhes/detalhes.html');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    toast.innerHTML = `
        <i class="${icone} toast-icone"></i>
        <div class="toast-conteudo">
            <h4>${titulo}</h4>
            <p>${mensagemHTML}</p>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        toast.style.transform = 'translateX(120%)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 5000); 
}

// Exposição Global para testes em botão
window.dispararNotificacao = dispararNotificacao;