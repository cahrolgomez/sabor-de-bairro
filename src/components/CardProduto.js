export default function CardProduto({ nome, descricao, preco, imagem, selo }) {
  const mensagem = encodeURIComponent(`Olá! Quero pedir 1 ${nome} por ${preco}.`);

  let elementoSelo;

  if (selo) {
    elementoSelo = <span>{selo}</span>;
  } else {
    elementoSelo = null;
  }

  return (
    <li>
      <figure>
        <img src={`/assets/imagens/${imagem}`} alt={nome} />
        {elementoSelo}
      </figure>
      <div className="cardapio-descricao">
        <div className="nome-preco">
          <h3>{nome}</h3>
          <span>{preco}</span>
        </div>
        <p>{descricao}</p>
        <a href={`https://wa.me/5579987654321?text=${mensagem}`}
          target="_blank" rel="noreferrer">Pedir</a>
      </div>
    </li>
  );
}
