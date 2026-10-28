-- 1. USUÁRIOS
CREATE TABLE usuarios (
    id_usuario      SERIAL PRIMARY KEY,
    nome            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) NOT NULL UNIQUE,
    senha_hash      VARCHAR(255) NOT NULL,
    tipo_usuario    VARCHAR(20) NOT NULL CHECK (tipo_usuario IN ('CLIENTE', 'ESTABELECIMENTO', 'ADMIN')),
    data_nascimento DATE,
    telefone        VARCHAR(11) CHECK (telefone ~ '^[0-9]{10,11}$'),
    criado_em       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. ESTABELECIMENTOS (1:1 COM USUARIO)
CREATE TABLE estabelecimentos (
    id_estabelecimento SERIAL PRIMARY KEY,
    id_usuario         INT NOT NULL UNIQUE REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    nome               VARCHAR(100) NOT NULL,
    cnpj               CHAR(14) NOT NULL UNIQUE CHECK (cnpj ~ '^[A-Z0-9]{12}[0-9]{2}$'),
    plano_comercial    VARCHAR(20) NOT NULL DEFAULT 'GRATUITO' CHECK (plano_comercial IN ('GRATUITO', 'PREMIUM', 'DESTAQUE')),
    latitude           DOUBLE PRECISION,
    longitude          DOUBLE PRECISION,
    cep                CHAR(8) CHECK (cep ~ '^[0-9]{8}$'),
    logradouro         VARCHAR(150) NOT NULL,
    numero             VARCHAR(10),
    complemento        VARCHAR(100),
    bairro             VARCHAR(80) NOT NULL,
    cidade             VARCHAR(80) NOT NULL,
    uf                 CHAR(2) NOT NULL DEFAULT 'GO',
    foto_url           VARCHAR(255)
);

-- 3. CATEGORIAS
CREATE TABLE categorias (
    id_categoria SMALLSERIAL PRIMARY KEY,
    nome         VARCHAR(50) NOT NULL UNIQUE,
    descricao    VARCHAR(250)
);

-- 4. EVENTOS
CREATE TABLE eventos (
    id_evento          SERIAL PRIMARY KEY,
    id_estabelecimento INT REFERENCES estabelecimentos(id_estabelecimento) ON DELETE CASCADE,
    nome               VARCHAR(100) NOT NULL,
    data_evento        TIMESTAMP NOT NULL,
    localizacao        VARCHAR(150),
    latitude           DOUBLE PRECISION,
    longitude          DOUBLE PRECISION
);

-- 5. ASSOCIATIVAS
CREATE TABLE acessos_perfil (
    id_usuario         INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos(id_estabelecimento) ON DELETE CASCADE,
    quantidade_acesso  INT NOT NULL DEFAULT 1 CHECK (quantidade_acesso > 0),
    PRIMARY KEY (id_usuario, id_estabelecimento)
);

CREATE TABLE acessos_evento (
    id_usuario        INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_evento         INT NOT NULL REFERENCES eventos(id_evento) ON DELETE CASCADE,
    quantidade_acesso INT NOT NULL DEFAULT 1 CHECK (quantidade_acesso > 0),
    PRIMARY KEY (id_usuario, id_evento)
);

CREATE TABLE favoritos (
    id_usuario         INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos(id_estabelecimento) ON DELETE CASCADE,
    PRIMARY KEY (id_usuario, id_estabelecimento)
);

CREATE TABLE avaliacoes_estabelecimento (
    id_usuario         INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos(id_estabelecimento) ON DELETE CASCADE,
    nota               SMALLINT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    data_avaliacao     DATE NOT NULL DEFAULT CURRENT_DATE,
    comentario         VARCHAR(500),
    PRIMARY KEY (id_usuario, id_estabelecimento)
);

CREATE TABLE avaliacoes_evento (
    id_usuario     INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_evento      INT NOT NULL REFERENCES eventos(id_evento) ON DELETE CASCADE,
    nota           SMALLINT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    data_avaliacao DATE NOT NULL DEFAULT CURRENT_DATE,
    comentario     VARCHAR(500),
    PRIMARY KEY (id_usuario, id_evento)
);

CREATE TABLE estabelecimento_categoria (
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos(id_estabelecimento) ON DELETE CASCADE,
    id_categoria       SMALLINT NOT NULL REFERENCES categorias(id_categoria) ON DELETE CASCADE,
    PRIMARY KEY (id_estabelecimento, id_categoria)
);

CREATE TABLE evento_categoria (
    id_evento    INT NOT NULL REFERENCES eventos(id_evento) ON DELETE CASCADE,
    id_categoria SMALLINT NOT NULL REFERENCES categorias(id_categoria) ON DELETE CASCADE,
    PRIMARY KEY (id_evento, id_categoria)
);

-- ÍNDICES ÚTEIS (os de PK/UNIQUE já existem automaticamente)
CREATE INDEX idx_eventos_estabelecimento ON eventos(id_estabelecimento);
CREATE INDEX idx_estabelecimentos_bairro ON estabelecimentos(bairro);
