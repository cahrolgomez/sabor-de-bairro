const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const banco = mysql.createPool({
  host: "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: "sabor_do_bairro",
});
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

app.get("/api/cardapio", async (req, res) => {
  try {
    const [produtos] = await banco.query(`
      SELECT id, categoria, nome, descricao, preco, imagem
      FROM produtos
      ORDER BY ordem_categoria, ordem_produto, id
    `);

    const categorias = new Map();
    for (const { categoria: categoriaCadastrada, preco, ...produto } of produtos) {
      const categoria = categoriaCadastrada.replace(/^(?:\p{Extended_Pictographic}\uFE0F?\s*)+/u, "");
      if (!categorias.has(categoria)) categorias.set(categoria, []);
      categorias.get(categoria).push({ ...produto, preco: moeda.format(Number(preco)) });
    }

    res.json(Array.from(categorias, ([categoria, itens]) => ({ categoria, itens })));
  } catch (erro) {
    console.error(erro.message);
    res.status(503).json({ mensagem: "Não foi possível carregar o cardápio." });
  }
});

app.listen(3001, "127.0.0.1", () => {
  console.log("API do cardápio disponível na porta 3001.");
});
