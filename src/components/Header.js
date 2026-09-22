function Header() {
  return (
    <header className="header-bg">
      <section className="header-container">
        <a href="/" className="logo-container">
          <div className="icone-logo">
            <img src="/assets/imagens/chef-hat.svg" alt="Chapéu de chef" />
          </div>
          <h1>Sabor de Bairro</h1>
        </a>

        <div className="menu-navegacao">
          <nav>
            <ul>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#casa">A casa</a></li>
              <li><a href="#visite">Visite</a></li>
            </ul>
          </nav>
        </div>

        <a href="#visite" className="btn-peca-agora">Pedir agora</a>
      </section>
    </header>
  );
}

export default Header;
