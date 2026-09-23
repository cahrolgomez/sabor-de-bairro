import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <section className="container1">
          <div className="container1-texto">
            <span className="horario"><img src="/assets/imagens/circle.svg" alt="Círculo verde" /> Aberto das 10h às 23h</span>
            <h2>Sabor de bairro, <br></br> <span>feito na hora.</span></h2>
            <p>Lanches artesanais, shakes gelados e aquela comida caseira que só a lanchonete da esquina tem.</p>
            <div className="btn-infos">
              <a href="#cardapio" id="btn-cardapio">Ver cardápio</a>
              <a href="#visite" id="btn-local">Como chegar</a>
            </div>

            <div className="sobre">
              <div>
                <img src="/assets/imagens/star-svgrepo-com.svg" alt="estrela"/>
                <span>4,9 estrelas</span>
              </div>
              <div>
                <img src="/assets/imagens/cutlery-svgrepo-com.svg" alt="talheres"/>
                <span>+50 mil pedidos</span>
              </div>
              <div>
                <img src="/assets/imagens/coffee-svgrepo-com.svg" alt="cafe"/>
                <span>Desde 2014</span>
              </div>
            </div>
          </div>

          <div className="container1-imagem">
            <figure>
              <img src="/assets/imagens/combo1.jpg" alt="Imagem de um lanche"/>
            </figure>
            <div className="box-destaque">
              <p className="p-destaque">Combo do dia</p>
              <p className="p-itens">Burguer + batata + shake</p>
              <p className="p-valor">R$ 39,99</p>
            </div>
          </div>
        </section>

        <section className="container2" id="cardapio">
          <div className="container2-topo">
            <span>Cardápio</span>
            <h2>Os queridinhos</h2>
            <p>Esses são os hits que a galera do bairro não deixa de pedir.</p>
          </div>
          <div className="lista-container">
            <ul>
              <li>
                <figure>
                  <img src="/assets/imagens/x-tudo.jpg" alt="x-tudo hamburguer"/>
                  <span>Mais pedido</span>
                </figure>
                <div className="cardapio-descricao">
                  <div className="nome-preco">
                    <h3>X-Tudo do Bairro</h3>
                    <span>R$ 34</span>
                  </div>
                  <p>Pão artesanal, hambúrguer 180g, bacon, ovo, queijo e salada</p>
                  <a href="https://wa.me/5579987654321?text=Olá!%20Quero%20pedir%201%20X-Tudo%20do%20Bairro%20por%20R%24%2034."
                    target="_blank" rel="noreferrer">Pedir</a>
                </div>
              </li>

              <li>
                <figure>
                  <img src="/assets/imagens/shake-ovomaltine.png" alt="shake"/>
                  <span>Gelado</span>
                </figure>
                <div className="cardapio-descricao">
                  <div className="nome-preco">
                    <h3>Shake de Ovomaltine</h3>
                    <span>R$ 21</span>
                  </div>
                  <p>Sorvete de baunilha, Ovomaltine e chantily na medida certa.</p>
                  <a href="https://wa.me/5579987654321?text=Ol%C3%A1%21%20Quero%20pedir%201%20Shake%20de%20Ovomaltine%20por%20R%24%2021."
                    target="_blank" rel="noreferrer">Pedir</a>
                </div>
              </li>

              <li>
                <figure>
                  <img src="/assets/imagens/batata.jpg" alt="batata"/>
                  <span>Para dividir</span>
                </figure>
                <div className="cardapio-descricao">
                  <div className="nome-preco">
                    <h3>Batata Rústica</h3>
                    <span>R$ 19</span>
                  </div>
                  <p>Batatas crocantes com alecrim, sal parrilha e cheddar cremoso</p>
                  <a href="https://wa.me/5579987654321?text=Ol%C3%A1%21%20Quero%20pedir%201%20Batata%20R%C3%BAstica%20por%20R%24%2019."
                    target="_blank" rel="noreferrer">Pedir</a>
                </div>
              </li>

              <li>
                <figure>
                  <img src="/assets/imagens/sanduiche-frango.jpg" alt="sanduiche de frango"/>
                  <span>Classico</span>
                </figure>
                <div className="cardapio-descricao">
                  <div className="nome-preco">
                    <h3>Sanduíche de Frango</h3>
                    <span>R$ 28</span>
                  </div>
                  <p>Filé de frango grelhado, maionese da casa e picles crocante.</p>
                  <a href="https://wa.me/5579987654321?text=Ol%C3%A1%21%20Quero%20pedir%201%20Sandu%C3%ADche%20de%20Frango%20por%20R%24%2028."
                    target="_blank" rel="noreferrer">Pedir</a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="casa-container" id="casa">
          <figure>
            <img src="/assets/imagens/foto-casa.jpg" alt="lanchonete"/>
          </figure>
          <div className="casa-descricao">
            <span>A casa</span>
            <h2>De bairro, para bairro</h2>
            <p>A lanchonete do Bairro começou com uma chapa pequena e muita vontade de fazer comida boa. Hoje a gente segue com o mesmo jeitinho: ingredientes frescos, pão na hora e atendimento que abraça.</p>
            <ul className="lista-casa">
              <li>
                <span><img src="/assets/imagens/yes-svgrepo-com.svg" alt="yes"/></span>
              <p>Ingredientes selecionados todo dia</p>
              </li>

              <li>
                <span><img src="/assets/imagens/yes-svgrepo-com.svg" alt="yes"/></span>
              <p>Pão artesanal assado na casa</p>
              </li>

              <li>
                <span><img src="/assets/imagens/yes-svgrepo-com.svg" alt="yes"/></span>
              <p>Ambiente familiar e descontraído</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="visite-container" id="visite">
          <span>Visite</span>
          <h2>Passe aqui ou peça</h2>

          <div className="visite-infos">
            <div className="horario-funcionamento">
              <span className="bg-img-infos"><img src="/assets/imagens/clock-circle-svgrepo-com.svg" alt="relogio"/></span>
              <h3>Horários</h3>
              <div className="horarios">
                <p>Segunda a sexta</p>
                <span>10h - 23h</span>
              </div>
              <div className="horarios">
                <p>Sabado</p>
                <span>11h - 00h</span>
              </div>
              <div className="horarios">
                <p>Domingo</p>
                <span>11h - 22h</span>
              </div>
            </div>

              
            <div className="endereco">
              <span className="bg-img-infos"><img src="/assets/imagens/location-pin-svgrepo-com.svg" alt="local"/></span>
              <h3>Endereço</h3>
              <p>Rua das Laranjeiras, 456, Centro</p>
              <p>Aracaju - Sergipe</p>
              <p>Esquina com a Av. Principal</p>
            </div>

            <div className="peca-wpp">
              <span className="bg-img-infos"><img src="/assets/imagens/phone-svgrepo-com.svg" alt="telefone"/></span>
              <h3>Peça agora</h3>
              <p>Ligue ou mande mensagem pelo WhatsApp. Entregamos em até 40 min.</p>

              <span className="telefone">(79) 98765-4321</span>
              <a href="#">Pedir pelo WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
