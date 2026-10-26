# Guia de Configuração de Ambiente - Venuo
Guia prático para inicialização do Docker, PostgreSQL 16, pgAdmin 4 e conexão com o Neon Database.

## 📋 Pré-requisitos
- Docker e Docker Compose instalados e em execução na sua máquina.

## Passo 1: Criar a Rede e o Volume no Docker
Abra o terminal (PowerShell, CMD ou terminal do Docker) e execute os comandos abaixo para criar a rede isolada e o volume de persistência do pgAdmin:
```bash
docker network create venuo-network
docker volume create pgadmin-data
```

## Passo 2: Subir o Container do PostgreSQL 16 (Local)
Execute o comando abaixo para criar e rodar o container do banco de dados local:
```bash
docker run -d --name postgres-venuo --network venuo-network -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=venuo_db -p 5432:5432 postgres:16
```

## Passo 3: Subir o Container do pgAdmin 4
Execute o comando abaixo para iniciar a interface de gerenciamento do banco de dados:
```bash
docker run -d --name pgadmin-venuo --network venuo-network -v pgadmin-data:/var/lib/pgadmin -e PGADMIN_DEFAULT_EMAIL=admin@venuo.com -e PGADMIN_DEFAULT_PASSWORD=admin -p 5051:80 dpage/pgadmin4
```

## Passo 4: Acessar a Interface do pgAdmin
1. Abra o seu navegador e acesse: http://localhost:5051.
2. Faça login utilizando as credenciais padrão de acesso ao painel:
  - E-mail: admin@venuo.com
  - Senha: admin

## Passo 5: Conectar ao Banco de Dados na Nuvem (Neon Database)
1. No menu lateral esquerdo do pgAdmin, clique com o botão direito em Servers → Register → Server...
2. Aba General:
  - Name: venuo_db (ou o nome de sua preferência).
3. Aba Connection:
  - Host name/address: Insira o host fornecido na sua Connection String do Neon (ex: seu-projeto.aws.neon.tech).
  - ⚠️ Atenção: Nunca versione URLs de conexão reais ou senhas no repositório.
  - Port: 5432
  - Maintenance database: venuo_db
  - Username: Seu usuário individual cadastrado no Neon (ex: seu_usuario).
  - Password: Sua senha individual do Neon.
4. Aba SSL:
  - SSL mode: Selecione Require.
5. Clique no botão azul Save.

## 🔄 Rotina Diária
Nas próximas vezes em que reiniciar o computador, os containers serão encerrados. Para retomá-los de forma rápida sem precisar recriar tudo, execute o comando abaixo no terminal:
```bash
docker start postgres-venuo pgadmin-venuo
```
Em seguida, acesse novamente http://localhost:5051 no navegador.