// js/feed.js
import { abrirModalLogin } from './auth.js'; // Importa a função do modal para o botão de favoritar

// --- DADOS SIMULADOS (MOCK) ---
const locaisVenuo = [
    { nome: "Yolo Beer Garden", categoria: "Bares", avaliacao: 4.1, distancia: "Setor Sul • 599 m", preco: "$$$", tempo: "Até 01:00", beneficio: true, imagem: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop" }, { nome: "Gercina Bar", categoria: "Bares", avaliacao: 4.7, distancia: "Setor Sul • 702 m", preco: "$$", tempo: "Até 00:00", beneficio: false, imagem: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" }, { nome: "Quintal Paulistano", categoria: "Bares", avaliacao: 4.2, distancia: "Setor Sul • 938 m", preco: "$$$", tempo: "Até 02:00", beneficio: false, imagem: "https://images.unsplash.com/photo-1572116469696-31de0f17cb6d?q=80&w=600&auto=format&fit=crop" }, { nome: "Madalena Gastrobar", categoria: "Restaurantes", avaliacao: 4.8, distancia: "Setor Marista • 1.2 km", preco: "$$$$", tempo: "Até 00:00", beneficio: true, imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" }, { nome: "Café Coreto", categoria: "Cafés", avaliacao: 4.9, distancia: "Setor Bueno • 800 m", preco: "$$", tempo: "Até 19:00", beneficio: false, imagem: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" }
];

// --- RENDERIZA O FEED ---
export function renderizarFeed(filtroCategoria = "Todos") {
    const gridResultados = document.getElementById('feed-resultados');
    if (!gridResultados) return;

    gridResultados.innerHTML = ''; // Limpa a grade

    const locaisFiltrados = filtroCategoria === "Todos" 
        ? locaisVenuo 
        : locaisVenuo.filter(local => local.categoria === filtroCategoria);

    const badgeCount = document.querySelector('.badge-count');
    if (badgeCount) badgeCount.textContent = locaisFiltrados.length;

    locaisFiltrados.forEach(local => {
        const tagBeneficio = local.beneficio ? `<span class="tag-beneficio">BENEFÍCIO VENUO</span>` : '';
        const cardHTML = `
            <div class="venue-card">
                <div class="card-image-container">
                    <img src="${local.imagem}" alt="${local.nome}">
                    <span class="tag-time"><i class="fa fa-circle" style="color: #00b4d8; font-size: 8px; margin-right: 4px;"></i> ${local.tempo}</span>
                    <button class="btn-fav" onclick="abrirModalLogin()"><i class="fa fa-heart"></i></button>
                    ${tagBeneficio}
                </div>
                <div class="card-info">
                    <div class="card-meta">
                        <span class="categoria">${local.categoria}</span>
                        <span class="rating"><i class="fa fa-star" style="color: #ffb703;"></i> ${local.avaliacao}</span>
                    </div>
                    <h3 class="venue-name">${local.nome} <i class="fa fa-arrow-up-right-from-square icon-link"></i></h3>
                    <div class="card-footer">
                        <span class="distance"><i class="fa fa-map-marker-alt"></i> ${local.distancia}</span>
                        <span class="price">${local.preco}</span>
                    </div>
                </div>
            </div>
        `;
        gridResultados.innerHTML += cardHTML;
    });
}

// --- CONFIGURA OS CLIQUES NAS ABAS DO HERO ---
export function configurarFiltrosAbas() {
    const abas = document.querySelectorAll('.tab-btn');
    abas.forEach(aba => {
        aba.addEventListener('click', (e) => {
            abas.forEach(btn => btn.classList.remove('active'));
            const abaClicada = e.currentTarget;
            abaClicada.classList.add('active');
            
            const categoria = abaClicada.textContent.trim();
            renderizarFeed(categoria);
        });
    });
}