SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS sabor_do_bairro CHARACTER SET utf8mb4;
USE sabor_do_bairro;

CREATE TABLE IF NOT EXISTS produtos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ordem_categoria SMALLINT UNSIGNED NOT NULL,
  ordem_produto SMALLINT UNSIGNED NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  nome VARCHAR(150) NOT NULL,
  descricao TEXT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  imagem VARCHAR(255),
  UNIQUE KEY produto_categoria (categoria, nome)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO produtos (ordem_categoria, ordem_produto, categoria, nome, descricao, preco, imagem)
VALUES
(1, 1, 'Lanches', 'X-Tudo do Bairro', 'Pão artesanal, hambúrguer 180g, bacon, ovo, queijo, presunto, alface e tomate.', 34.00, 'x-tudo.jpg'),
(1, 2, 'Lanches', 'X-Bacon', 'Pão artesanal, hambúrguer 180g, queijo cheddar, bacon crocante, alface e tomate.', 30.00, 'x-bacon.jpg'),
(1, 5, 'Lanches', 'X-Salada', 'Pão artesanal, hambúrguer 150g, queijo, alface, tomate e maionese da casa.', 25.00, 'x-salad.jpg'),
(1, 7, 'Lanches', 'Clássico', 'Pão artesanal, hambúrguer 180g, queijo, alface, tomate e molho especial.', 28.00, 'classic-burguer.jpg'),
(1, 8, 'Lanches', 'Sanduíche de Frango', 'Pão artesanal, filé de frango empanado, queijo, alface, tomate e maionese temperada.', 30.00, 'sanduiche-frango.jpg'),
(1, 9, 'Lanches', 'Misto Quente', 'Pão de forma, presunto, queijo e manteiga na chapa.', 12.00, 'misto.jpg'),
(1, 10, 'Lanches', 'Cachorro-Quente', 'Pão, salsicha, molho especial, milho, batata palha e queijo ralado.', 15.00, 'hot-dog.jpg'),
(2, 1, 'Porções', 'Batata Frita Média', 'Batatas crocantes com sal.', 14.00, 'batata-frita-media.jpg'),
(2, 2, 'Porções', 'Batata Frita Grande', 'Porção generosa de batatas fritas.', 19.00, 'batata-frita-grande.jpg'),
(2, 3, 'Porções', 'Batata Rústica', 'Batatas temperadas com alecrim, sal e páprica.', 16.00, 'batata.jpg'),
(2, 4, 'Porções', 'Batata com Cheddar e Bacon', 'Batatas fritas cobertas com cheddar cremoso e bacon crocante.', 25.00, 'batata-cheddar-bacon.jpg'),
(2, 6, 'Porções', 'Nuggets', 'Pedaços de frango empanados e crocantes.', 18.00, 'Nuggets.jpg'),
(3, 1, 'Bebidas', 'Refrigerante Lata', 'Refrigerante gelado em lata de 350ml.', 7.00, 'refrigerante-lata.jpg'),
(3, 3, 'Bebidas', 'Refrigerante 1L', 'Refrigerante para compartilhar.', 12.00, 'refrigerante1L.jpg'),
(3, 4, 'Bebidas', 'Suco Natural', 'Suco preparado com frutas frescas.', 10.00, 'suco-natural.jpg'),
(3, 6, 'Bebidas', 'Água Mineral', 'Água mineral sem gás de 500ml.', 5.00, 'agua-mineral.jpg'),
(3, 8, 'Bebidas', 'Chá Gelado', 'Bebida gelada com sabor de limão ou pêssego.', 8.00, 'cha-gelado.jpg'),
(4, 1, 'Milk-shakes', 'Shake de Ovomaltine', 'Sorvete de baunilha, Ovomaltine e chantilly.', 21.00, 'shake-ovomaltine.png'),
(4, 2, 'Milk-shakes', 'Shake de Chocolate', 'Sorvete de chocolate batido com leite e calda de chocolate.', 18.00, 'Shake-de-chocolate.jpg'),
(4, 3, 'Milk-shakes', 'Shake de Morango', 'Sorvete de morango batido com leite e cobertura de morango.', 18.00, 'Shake-de-Morango.jpg'),
(4, 5, 'Milk-shakes', 'Shake de Nutella', 'Sorvete de baunilha, creme de avelã e chantilly.', 23.00, 'Shake-de-Nutella.jpg'),
(5, 2, 'Sobremesas', 'Petit Gateau', 'Bolinho de chocolate com recheio cremoso, acompanhado de sorvete.', 20.00, 'Petit-Gateau.jpg'),
(5, 3, 'Sobremesas', 'Sundae', 'Sorvete de creme com calda de chocolate ou morango e cobertura.', 12.00, 'Sundae.jpg'),
(5, 4, 'Sobremesas', 'Açaí na Taça', 'Açaí cremoso acompanhado de granola e leite condensado.', 14.00, 'Acai-na-Taca.jpg')
AS novos
ON DUPLICATE KEY UPDATE imagem = COALESCE(novos.imagem, produtos.imagem);
