CREATE TABLE usuarios (
    id_usuario      SERIAL PRIMARY KEY,
    data_nascimento DATE NOT NULL,
    data_cadastro   DATE NOT NULL DEFAULT CURRENT_DATE,
    nome            VARCHAR(100) NOT NULL,
    email           VARCHAR(120) NOT NULL UNIQUE,
    senha_hash      VARCHAR(16) NOT NULL,
    telefone        VARCHAR(11) CHECK (telefone ~ '^[0-9]{10,11}$')
);

CREATE TABLE estabelecimentos (
    id_estabelecimento SERIAL PRIMARY KEY,
    latitude    REAL,
    longitude   REAL,
    cnpj        CHAR(14) NOT NULL UNIQUE CHECK (cnpj ~ '^[A-Z0-9]{12}[0-9]{2}$'),
    nome        VARCHAR(100) NOT NULL,
	email		VARCHAR(120) NOT NULL UNIQUE,
    cep         CHAR(8) CHECK (cep ~ '^[0-9]{8}$'),
    logradouro  VARCHAR(150) NOT NULL,
    numero      VARCHAR(10),
    complemento VARCHAR(100),
    bairro      VARCHAR(80) NOT NULL,
    cidade      VARCHAR(80) NOT NULL,
    uf          CHAR(2) NOT NULL DEFAULT 'GO'
);

CREATE TABLE categorias (
    id_categoria SMALLSERIAL PRIMARY KEY,
    nome         VARCHAR(50) NOT NULL UNIQUE,
    descricao    VARCHAR(250)
);

CREATE TABLE eventos (
    id_evento          SERIAL PRIMARY KEY,
    id_estabelecimento INT REFERENCES estabelecimentos (id_estabelecimento) ON DELETE CASCADE,
    latitude           REAL,
    longitude          REAL,
    data_evento        TIMESTAMP NOT NULL,
    nome               VARCHAR(100) NOT NULL,
    localizacao        VARCHAR(150)
);


CREATE TABLE acessos_perfil (
    id_usuario         INT NOT NULL REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos (id_estabelecimento) ON DELETE CASCADE,
    quantidade_acesso  INT NOT NULL DEFAULT 1 CHECK (quantidade_acesso > 0),
    PRIMARY KEY (id_usuario, id_estabelecimento)
);


CREATE TABLE acessos_evento (
    id_usuario        INT NOT NULL REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    id_evento         INT NOT NULL REFERENCES eventos (id_evento) ON DELETE CASCADE,
    quantidade_acesso INT NOT NULL DEFAULT 1 CHECK (quantidade_acesso > 0),
    PRIMARY KEY (id_usuario, id_evento)
);


CREATE TABLE favoritos (
    id_usuario         INT NOT NULL REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos (id_estabelecimento) ON DELETE CASCADE,
    PRIMARY KEY (id_usuario, id_estabelecimento)
);


CREATE TABLE avaliacoes_estabelecimento (
    id_usuario         INT NOT NULL REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos (id_estabelecimento) ON DELETE CASCADE,
    nota               SMALLINT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    data_avaliacao     DATE NOT NULL DEFAULT CURRENT_DATE,
    comentario         VARCHAR(500),
    PRIMARY KEY (id_usuario, id_estabelecimento)
);

CREATE TABLE avaliacoes_evento (
    id_usuario     INT NOT NULL REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    id_evento      INT NOT NULL REFERENCES eventos (id_evento) ON DELETE CASCADE,
    nota           SMALLINT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    data_avaliacao DATE NOT NULL DEFAULT CURRENT_DATE,
    comentario     VARCHAR(500),
    PRIMARY KEY (id_usuario, id_evento)
);


CREATE TABLE estabelecimento_categoria (
    id_estabelecimento INT NOT NULL REFERENCES estabelecimentos (id_estabelecimento) ON DELETE CASCADE,
    id_categoria       SMALLINT NOT NULL REFERENCES categorias (id_categoria) ON DELETE CASCADE,
    PRIMARY KEY (id_estabelecimento, id_categoria)
);

CREATE TABLE evento_categoria (
    id_evento    INT NOT NULL REFERENCES eventos (id_evento) ON DELETE CASCADE,
    id_categoria SMALLINT NOT NULL REFERENCES categorias (id_categoria) ON DELETE CASCADE,
    PRIMARY KEY (id_evento, id_categoria)
);