const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const banco = mysql.createPool({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "sabor_do_bairro",
});
const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

app.get("/api/cardapio", async (_requisicao, resposta) => {
  try {
    const [produtos] = await banco.query(`
      SELECT id, categoria, nome, descricao, preco, imagem
      FROM produtos
      ORDER BY ordem_categoria, ordem_produto, id
    `);

    const cardapio = [];

    for (const produto of produtos) {
      const categoria = produto.categoria;
      let grupo = cardapio.find((grupo) => grupo.categoria === categoria);

      if (!grupo) {
        grupo = { categoria, itens: [] };
        cardapio.push(grupo);
      }

      grupo.itens.push({
        id: produto.id,
        nome: produto.nome,
        descricao: produto.descricao,
        imagem: produto.imagem,
        preco: moeda.format(Number(produto.preco)),
      });
    }

    resposta.json(cardapio);
  } catch (erro) {
    console.error(erro.message);
    resposta.status(503).json({ mensagem: "Não foi possível carregar o cardápio." });
  }
});

app.listen(3001, "127.0.0.1", () => {
  console.log("API do cardápio disponível na porta 3001.");
});
