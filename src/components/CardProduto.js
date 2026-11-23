export default function CardProduto({ nome, descricao, preco, imagem, selo }) {
  const mensagem = encodeURIComponent(`Olá! Quero pedir 1 ${nome} por ${preco}.`);

  return (
    <li>
      {imagem && (
        <figure>
          <img src={`/assets/imagens/${imagem}`} alt={nome} />
          {selo && <span>{selo}</span>}
        </figure>
      )}
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