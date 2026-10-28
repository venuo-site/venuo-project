-- 1. Escritório Bueno Bar (DESTAQUE)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Escritorio', 'escritoriobuenobar@gmail.com', '$2b$12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Escritório Bueno', '67008050000196', 'DESTAQUE', -16.6968461, -49.2737113, '74215200', 'Rua T-50', 'S/N', 'Qd. 58', 'Setor Bueno', 'Goiânia', 'GO', 'https://picsum.photos/seed/escritorio/600/400'
FROM novo_usuario;

-- 2. Ópera Café Bistrô (PREMIUM)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Opera Cafe', 'lojaoperacafe@gmail.com', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Ópera Café Bistrô', '29633601000130', 'PREMIUM', -16.7002239, -49.2725353, '74252200', 'Rua T-52', '511', 'Qd. 81, Lt. 24', 'Setor Bueno', 'Goiânia', 'GO', 'https://picsum.photos/seed/operacafe/600/400'
FROM novo_usuario;

-- 3. Officina Cervejaria (GRATUITO)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Officina', 'officinacervejaria@gmail.com', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Officina Cervejaria', '01637759000144', 'GRATUITO', -16.7118310, -49.2612740, '74823350', 'Rua T-64', '476', '', 'Setor Bela Vista', 'Goiânia', 'GO', 'https://picsum.photos/seed/officina/600/400'
FROM novo_usuario;

-- 4. Glouton Gastronomia (DESTAQUE)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Glouton', 'contato@glouton.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Glouton Gastronomia', '12345678000101', 'DESTAQUE', -16.6891230, -49.2654320, '74110010', 'Rua 139', '112', '', 'Setor Marista', 'Goiânia', 'GO', 'https://picsum.photos/seed/glouton/600/400'
FROM novo_usuario;

-- 5. Cervejaria Colombina Gastropub (PREMIUM)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Colombina', 'contato@cervejariacolombina.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Cervejaria Colombina Gastropub', '23456789000102', 'PREMIUM', -16.6925430, -49.2687650, '74150030', 'Rua 1129', '465', '', 'Setor Marista', 'Goiânia', 'GO', 'https://picsum.photos/seed/colombina/600/400'
FROM novo_usuario;

-- 6. Bahrem Cervejaria (DESTAQUE)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Bahrem', 'contato@bahrem.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Bahrem Cervejaria', '34567890000103', 'DESTAQUE', -16.6987650, -49.2643210, '74180040', 'Rua 1136', '60', '', 'Setor Marista', 'Goiânia', 'GO', 'https://picsum.photos/seed/bahrem/600/400'
FROM novo_usuario;

-- 7. Cateretê Restaurante (GRATUITO)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Caterete', 'contato@caterete.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Cateretê Bar e Restaurante', '45678901000104', 'GRATUITO', -16.6876540, -49.2598760, '74230010', 'Avenida T-2', '318', '', 'Setor Bueno', 'Goiânia', 'GO', 'https://picsum.photos/seed/caterete/600/400'
FROM novo_usuario;

-- 8. Carne de Sol dos 100 (GRATUITO)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Carne 100', 'contato@carnedesoldos100.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Carne de Sol dos 100', '56789012000105', 'GRATUITO', -16.6812340, -49.2543210, '74085010', 'Rua 132', '289', '', 'Setor Sul', 'Goiânia', 'GO', 'https://picsum.photos/seed/carne100/600/400'
FROM novo_usuario;
