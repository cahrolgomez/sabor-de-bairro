import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import CardProduto from "../components/CardProduto";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CardapioCompleto() {
  const [cardapio, setCardapio] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  let cardapioFiltrado = cardapio || [];

  if (categoriaSelecionada !== "") {
    cardapioFiltrado = cardapioFiltrado.filter(
      (grupo) => grupo.categoria === categoriaSelecionada
    );
  }

  useEffect(() => {
    async function carregarCardapio() {
      const resposta = await fetch("/api/cardapio");
      const dados = await resposta.json();
      setCardapio(dados);
    }

    carregarCardapio();
  }, []);

  return (
    <>
    <Header />
    <main className="main-container">
      <div className="container2 pagina-cardapio">
        <div className="container2-topo">
          <h1>Cardápio completo</h1>
          <Link to="/" className="btn-cardapio">Voltar ao início</Link>
        </div>

        {cardapio === null && <p role="status">Carregando cardápio…</p>}
        {cardapio?.length === 0 && <p>Nenhum produto cadastrado.</p>}

        <div className="busca-cardapio">
          <label htmlFor="categoria-cardapio">Escolha uma categoria</label>
          <div className="busca-cardapio-controles">
            <div className="seletor-categoria">
              <FaSearch/>
              <select id="categoria-cardapio" value={categoriaSelecionada}
                onChange={(evento) => setCategoriaSelecionada(evento.target.value)}>
                <option value="">Todas as categorias</option>
                {cardapio?.map(({ categoria }) => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>
            <button type="button" onClick={() => setCategoriaSelecionada("")}>Mostrar tudo</button>
          </div>
        </div>

        {cardapioFiltrado.map(({ categoria, itens }) => (
          <section className="lista-container categoria-cardapio" key={categoria}>
            <h2>{categoria}</h2>
            <ul>
              {itens.map((item) => (
                <CardProduto
                  key={item.id}
                  nome={item.nome}
                  descricao={item.descricao}
                  preco={item.preco}
                  imagem={item.imagem}
                  selo={item.selo}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
