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
