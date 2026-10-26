# 🗺️ Venuo — Plataforma de Geolocalização e Lazer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
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

Nesta fase do projeto, a solução evoluiu da fase inicial de prototipação visual para a **simulação funcional em HTML5, CSS3 e JavaScript** integrada com ambiente local containerizado.

- **Exploração em Modo Visitante (Acesso sem Fricção):** Navegação e busca pública sem obrigatoriedade de cadastro inicial.
- **Resultados Ordenados por Proximidade:** Feed alimentado por geolocalização e comparação direta entre estabelecimentos.
- **Gatilho de Login por Valor:** Bloqueio e solicitação de autenticação apenas quando o usuário tenta executar ações avançadas, como favoritar um local ou salvar cupons.
- **Módulo de Autenticação (B2C):** Cadastro por e-mail/senha com validação de credenciais e seleção de interesses pós-login.
- **Detalhamento do Local:** Exibição de horário, endereço, atrações, foto e integração com rotas.

---

## 📂 Estrutura do Repositório

```text
venuo-project/
├── .env.example      # Template público de variáveis de ambiente para a equipe
├── docs/             # Documentação técnica (Setup de Ambiente, TAP e Requisitos)
│   └── setup-ambiente.md
├── design/           # Fluxos de UX, protótipo do Figma e identidade visual
└── src/              # Código-fonte da aplicação web (HTML, CSS e JS)
    ├── assets/       # Imagens, ícones e fontes
    ├── css/          # Folhas de estilo e estilização responsiva
    ├── js/           # Scripts de interatividade e simulação do feed
    └── index.html    # Página inicial da aplicação
```

---

## 🚀 Como Executar o Projeto e Configurar o Ambiente

### 1. Clonar o Repositório
```bash
git clone [https://github.com/venuo-site/venuo-project.git](https://github.com/venuo-site/venuo-project.git)
cd venuo-project
```

### 2. Configurar o Arquivo de Variáveis de Ambiente (`.env`)
Cada desenvolvedor deve criar o seu próprio arquivo `.env` localmente com base no template disponibilizado:
1. Copie o arquivo `.env.example` para `.env` na raiz do projeto:
   ```bash
   cp .env.example .env
   ```
2. Abra o arquivo `.env` recém-criado e preencha com as suas credenciais individuais (como usuários e senhas do Neon Database e do ambiente local).
3. ⚠️ **Atenção:** O arquivo `.env` contém credenciais privadas, fica apenas na sua máquina e **nunca** deve ser commitado no GitHub (já configurado no `.gitignore`).

### 3. Subir os Containers do Banco de Dados Local (Docker)
Com o Docker instalado e rodando em sua máquina, crie a rede, os volumes e inicie os containers do **PostgreSQL 16** e **pgAdmin 4**:

```bash
# Criar rede e volume
docker network create venuo-network
docker volume create pgadmin-data

# Subir container do PostgreSQL (Porta 5432)
docker run -d --name postgres-venuo --network venuo-network -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=venuo_db -p 5432:5432 postgres:16

# Subir container do pgAdmin 4 (Porta 5051)
docker run -d --name pgadmin-venuo --network venuo-network -v pgadmin-data:/var/lib/pgadmin -e PGADMIN_DEFAULT_EMAIL=admin@venuo.com -e PGADMIN_DEFAULT_PASSWORD=admin -p 5051:80 dpage/pgadmin4
```

### 4. Executar a Aplicação Web
Navegue até a pasta `src/` e abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari) ou utilize a extensão **Live Server** no VS Code.

> 📖 **Guia Completo de Setup:** Para instruções detalhadas de conexão com a nuvem do Neon Database, portas utilizadas e rotinas diárias de execução, consulte o nosso **[Guia de Setup de Ambiente](docs/setup-ambiente.md)**.

---

## 🛠️ Tecnologias e Ferramentas

- **Prototipação & Design UI/UX:** Figma (Prototipação navegável de alta fidelidade e Design System).
- **Desenvolvimento Front-end:** HTML5 semântico, CSS3 responsivo (Flexbox/Grid, Mobile-First) e JavaScript puro (ES6+).
- **Banco de Dados & Infraestrutura:** PostgreSQL 16, pgAdmin 4, Docker, Docker Compose e Neon Database (Nuvem).
- **Gestão de Projeto & Metodologia:** Framework Scrum estruturado em sprints e gerenciado via GitHub.

---

## 👥 Equipe do Projeto (Squad)

- **André Felipe Alves Torres**
- **Artur Humberto Moreira Julião Neto**
- **Caio Rezende**
- **Carol Thalia Alves Silva** — Quality Assurance (QA)
- **Gustavo Henrique Marreiros Santos** — Scrum Master
- **Jefersson Weberton Junior Alves da Silva**
- **Matheus Rodrigues**
- **Arthur Mariano L. Neto** — Professor Orientador