# Sabor do Bairro

Landing page de uma lanchonete, construída com React e Create React App.

## Estrutura

- `src/`: componentes e estilos da aplicação.
- `public/`: HTML base e arquivos estáticos.
- `package.json`: comandos e dependências do projeto.

## Como executar

Na raiz deste projeto, execute:

```bash
npm install
npm start
```

Em seguida, acesse `http://localhost:3000`.

## Cardápio completo com MySQL

1. No MySQL Workbench, abra e execute `server/cardapio.sql` para criar o banco e inserir os produtos.
2. Copie `server/.env.example` para `server/.env` e preencha `DB_PASSWORD` com a senha do seu MySQL. Se usar outro usuário, ajuste também `DB_USER`.
3. Na raiz do projeto, execute `npm install --prefix server` e depois `npm run api`.
4. Em outro terminal, execute `npm start` e abra `http://localhost:3000/cardapio-completo`.

O servidor usa Node.js 20.6 ou posterior para ler o arquivo `.env`.
