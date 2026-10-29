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

-- 9. Piquiras Empório (PREMIUM)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Piquiras', 'contato@piquiras.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Empório Piquiras', '67890123000106', 'PREMIUM', -16.7089010, -49.2345670, '74810100', 'Avenida Dep. Jamel Cecílio', '3300', 'Shopping Flamboyant', 'Jardim Goiás', 'Goiânia', 'GO', 'https://picsum.photos/seed/piquiras/600/400'
FROM novo_usuario;

-- 10. Botequim Mercatto (PREMIUM)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Mercatto', 'contato@botequimmercatto.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Botequim Mercatto', '78901234000107', 'PREMIUM', -16.6912340, -49.2634560, '74150030', 'Rua T-36', '2788', '', 'Setor Bueno', 'Goiânia', 'GO', 'https://picsum.photos/seed/mercatto/600/400'
FROM novo_usuario;

-- 11. Piry Bar e Bistro (GRATUITO)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Piry', 'contato@pirybar.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Piry Bar e Bistrô', '89012345000108', 'GRATUITO', -16.6654320, -49.2512340, '74633010', 'Avenida C-205', '108', '', 'Jardim América', 'Goiânia', 'GO', 'https://picsum.photos/seed/piry/600/400'
FROM novo_usuario;

-- 12. Zentai Sushi Bar (PREMIUM)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Zentai', 'contato@zentaisushi.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Zentai Sushi Bar', '90123456000109', 'PREMIUM', -16.6954320, -49.2678900, '74140020', 'Rua 148', '121', '', 'Setor Marista', 'Goiânia', 'GO', 'https://picsum.photos/seed/zentai/600/400'
FROM novo_usuario;

-- 13. Pixel Cafe (GRATUITO)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Pixel', 'contato@pixelcafe.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Pixel Café', '01234567000110', 'GRATUITO', -16.6834560, -49.2587650, '74080010', 'Rua 10', '345', '', 'Setor Central', 'Goiânia', 'GO', 'https://picsum.photos/seed/pixelcafe/600/400'
FROM novo_usuario;



-- 14. Moony Food & Drink (DESTAQUE)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Moony', 'contato@moony.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Moony Food & Drink', '12345678000111', 'DESTAQUE', -16.6943210, -49.2612340, '74150030', 'Alameda Ricardo Paranhos', '928', '', 'Setor Marista', 'Goiânia', 'GO', 'https://picsum.photos/seed/moony/600/400'
FROM novo_usuario;

-- 15. Bolshoi Pub (DESTAQUE)
WITH novo_usuario AS (
    INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario)
    VALUES ('Proprietario Bolshoi', 'contato@bolshoipub.com.br', '2b12$e82Pz21e7j8...hash_simulado', 'ESTABELECIMENTO')
    RETURNING id_usuario
)
INSERT INTO estabelecimentos (id_usuario, nome, cnpj, plano_comercial, latitude, longitude, cep, logradouro, numero, complemento, bairro, cidade, uf, foto_url)
SELECT id_usuario, 'Bolshoi Pub', '23456789000112', 'DESTAQUE', -16.7023450, -49.2690120, '74210010', 'Rua T-53', '1140', '', 'Setor Bueno', 'Goiânia', 'GO', 'https://picsum.photos/seed/bolshoi/600/400'
FROM novo_usuario;
