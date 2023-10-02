import React from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"

function Benefits(props) {
  return (
    <section className="container-Benefits">

      <h2 className="tittle-benefits-1">Alguns benefícios</h2>
      <div className="divisor"></div>

      <div className="carrossel-Benefits">
        <div className="grade">
          <div className="slides">
            <div className="slide primeira">
              <img src={require('./img/card.png')} alt='Clube de desconto' />
              <h5>Clube de desconto</h5>
              <p>Economize em suas compras com nosso Clube de Desconto exclusivo, aproveitando ofertas especiais em diversos produtos e serviços.</p>
            </div>
          </div>
          
          <div className="slide">
            <img src={require('./img/card.png')} alt='Pacote Microsoft 365' />
            <h5>Clube de descontos</h5>
            <p hidden>Economize em suas compras com nosso Clube de Desconto exclusivo, aproveitando ofertas especiais em diversos produtos e serviços.</p>
          </div>

          <div className="slide" >
            <img src={require('./img/cofrinho.png')} alt='Sem multa por cancelamento' />
            <h5>Sem multa por cancelamento</h5>
            <p hidden>Oferecemos a flexibilidade de cancelar nossos serviços a qualquer momento, sem custos adicionais, para que você tenha total controle sobre sua assinatura.
            </p>
          </div>

          <div className="slide">
            <img src={require('./img/instalacao.png')} alt='Wi-Fi 6' />
            <h5>Instalação <br /> personalizada</h5>
            <p hidden>Nossa equipe de especialistas está pronta para personalizar a instalação de acordo com suas necessidades, garantindo que sua experiência seja adaptada às suas preferências.
            </p>
          </div>

          <div className="slide">
            <img src={require('./img/365.png')} alt='Wi-Fi 6' />
            <h5>Pacote <br /> Microsoft Completo</h5>
            <p hidden>Desfrute de uma conexão de internet ultrarrápida e estável com nossa tecnologia Wi-Fi 6, proporcionando uma experiência online mais fluida.
            </p>
          </div>


        </div>

        
      </div>

      <div className="bt-assinar">
          <a href="https://api.whatsapp.com/send?phone=551128762641" target="_blanck">Saiba mais</a>
        </div>

      <div id="canais">
        <h2 className="tittle-benefits-2">De um <spam className="name-marca">HAYP</spam> na sua Tv</h2>
        <div className="divisor"></div>

        <h5 className="tittle-benefits-1">Canais abertos</h5>
        <div className="container-canais">
          <div className="container-canais-aberto">
            <div className="carrossel-canais">
              <img src={require('./img/canal-band.png')} alt='Canal Band' />
              <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
              <img src={require('./img/canal-sbt.png')} alt='Canal SBT' />
              <img src={require('./img/canal-record.png')} alt='Canal Band' />
              <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
              <img src={require('./img/canal-sbt.png')} alt='Canal SBT' />
            </div>
          </div>
        </div>

        <a href="/canais">Veja todos os canais abertos</a>

        <div className="container-canais">
          <h5 className="tittle-benefits-1">Canais fechados</h5>
          <div className="container-canais-fechados">
            <div className="carrossel-canais">
              <img src={require('./img/canal-warner.png')} alt='Canal Warner' />
              <img src={require('./img/canal-discovery.png')} alt='Canal Discovery' />
              <img src={require('./img/canal-espn.png')} alt='Canal ESPN' />
              <img src={require('./img/canal-tlc.png')} alt='Canal TLC' />
              <img src={require('./img/canal-animal.png')} alt='Canal animal planet' />
              <img src={require('./img/canal-fox.png')} alt='Canal Fox' />
            </div>
          </div>
        </div>

        <a href="#" style={{ marginBottom: '20px' }}>Veja todos os canais fechados</a>

        <div className="bt-assinar">
          <a href="https://api.whatsapp.com/send?phone=551128762641" target="_blanck">Assine agora</a>
        </div>

      </div>

      <div>
        <h5 className="tittle-benefits-3"> Monte um combo e ganhe <br />  <span style={{color: "#04CB3A" }}>MEGAS de bônus</span>!!</h5>

        <div>
          <div>
            <p className="combo-assinando">Assinando</p>
            <img src={require('./img/combo-simples.png')} alt='Combo simples' />
            <p>
            Você ganha mais <spam className="name-marca-destaque">100 Mega</spam> de bônus
            </p>
            </div>

          <div>
            <p className="combo-assinando">Assinando o <br/> <spam className="name-marca-destaque" >combo completo</spam></p>
            <img src={require('./img/combo-completo.png')} alt='Combo Completo' />
            <p >
            Você ganha mais <spam className="name-marca-destaque">200 Mega</spam> de bônus
            </p>
            </div>
        </div>

        <div className="bt-assinar">
          <a href="#">Assine agora</a>
        </div>
      </div>

      <div className="contatos-para-assinar" hidden>
        <h2 className="tittle-benefits-1">Perguntas frequentes</h2>
        <div className="divisor"></div>

        <Perguntas_Frequentes
          perguntas="Posso contratar apenas a  internet ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

        <Perguntas_Frequentes
          perguntas="Eu posso contratar um combo para o meu comércio ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

        <Perguntas_Frequentes
          perguntas="No céu tem pão ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

      </div>

    </section>

  )
}
export default Benefits;