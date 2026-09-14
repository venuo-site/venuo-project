# 🗺️ Venuo — Plataforma de Geolocalização e Lazer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Scrum](https://img.shields.io/badge/Methodology-Scrum-0052CC?style=for-the-badge)

O **Venuo** é uma plataforma web responsiva (Mobile-First) voltada para a descoberta inteligente e contextualizada de opções de lazer, entretenimento, bares e eventos na Região Metropolitana de Goiânia. O projeto é desenvolvido como Prova de Conceito (PoC) para a disciplina de **Projeto Integrador** do curso de Análise e Desenvolvimento de Sistemas (ADS).

---

## 🎯 Proposta de Valor e Diferencial Central

Diferente de alternativas generalistas ou focadas exclusivamente em ingressos e conteúdo digital (como Google Maps, Sympla e Instagram), o Venuo conecta o público ao lazer presencial em tempo real, organizando o feed por localização física e preferências.

### ⚡ Princípio de Descoberta em até 3 Cliques
O fluxo de navegação foi projetado para eliminar a fadiga de decisão e permitir que o usuário encontre seu rolê em no máximo 3 interações:

1. **Clique 1 (Filtragem Rápida):** Selecionar uma categoria ou filtro na tela inicial (ex.: *"Bares"* ou *"Música ao Vivo"*).
2. **Clique 2 (Escolha no Feed):** Selecionar o estabelecimento desejado no feed ordenado por proximidade física.
3. **Clique 3 (Ação Final):** Acessar a tela de detalhes do local e executar a conversão (clicar em *"Ver Rota"* para abrir o mapa ou *"Resgatar Cupom"*).

---

## 📱 Escopo Atual e Funcionalidades (2º Período)

Nesta fase do projeto, a solução evoluiu da fase inicial de prototipação visual para a **simulação funcional em HTML5, CSS3 e JavaScript**.

- **Exploração em Modo Visitante (Acesso sem Fricção):** Navegação e busca pública sem obrigatoriedade de cadastro inicial.
- **Resultados Ordenados por Proximidade:** Feed alimentado por geolocalização e comparação direta entre estabelecimentos.
- **Gatilho de Login por Valor:** Bloqueio e solicitação de autenticação apenas quando o usuário tenta executar ações avançadas, como favoritar um local ou salvar cupons.
- **Módulo de Autenticação (B2C):** Cadastro por e-mail/senha com validação de credenciais e seleção de interesses pós-login.
- **Detalhamento do Local:** Exibição de horário, endereço, atrações, foto e integração com rotas.

---

## 📂 Estrutura do Repositório

```text
venuo-project/
├── docs/             # Documentação técnica (TAP, Análise de Requisitos e Modelagem)
├── design/           # Fluxos de UX, protótipo do Figma e identidade visual
└── src/              # Código-fonte da aplicação web (HTML, CSS e JS)
    ├── assets/       # Imagens, ícones e fontes
    ├── css/          # Folhas de estilo e estilização responsiva
    ├── js/           # Scripts de interatividade e simulação do feed
    └── index.html    # Página inicial da aplicação

🚀 Como Executar o Projeto Localmente

Clonar o Repositório:
git clone (url do repositorio)

Acessar a Pasta do Código:
cd venuo-project/src

Executar no Navegador:
Abra o arquivo index.html diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari) ou utilize a extensão Live Server no VS Code.

🛠️ Tecnologias e Ferramentas
Prototipação & Design UI/UX: Figma (Prototipação navegável de alta fidelidade e Design System).
Desenvolvimento Front-end: HTML5 semântico, CSS3 responsivo (Flexbox/Grid, Mobile-First) e JavaScript puro (ES6+).
Gestão de Projeto & Metodologia: Framework Scrum estruturado em sprints e gerenciado via GitHub.

👥 Equipe do Projeto (Squad)
André
Artur Humberto Moreira Julião Neto —
Caio
Carol Thalia Alves Silva — Quality Assurance (QA)
Gustavo Henrique Marreiros Santos — Scrum Master
Jefersson Weberton Junior Alves da Silva —
Matheus Rodrigues 
Arthur Mariano L. Neto — Professor Orientador
