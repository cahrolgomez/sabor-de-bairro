function Footer() {
  return (
    <footer className="footer-container">
      <a href="/" className="logo-container">
        <div className="icone-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/imagens/chef-hat.svg`} alt="Chapéu de chef" />
        </div>
        <p>Sabor de Bairro</p>
      </a>

      <p>© 2026 Sabor de Bairro. Feito com carinho na chapa.</p>

      <nav className="social-medias" aria-label="Redes sociais">
        <a href="#whatsapp"><img src={`${process.env.PUBLIC_URL}/assets/imagens/whatsapp-svgrepo-com.svg`} alt="WhatsApp" /></a>
        <a href="#instagram"><img src={`${process.env.PUBLIC_URL}/assets/imagens/instagram-svgrepo-com.svg`} alt="Instagram" /></a>
        <a href="#tiktok"><img src={`${process.env.PUBLIC_URL}/assets/imagens/tiktok-fill-svgrepo-com.svg`} alt="TikTok" /></a>
      </nav>
    </footer>
  );
}

export default Footer;
