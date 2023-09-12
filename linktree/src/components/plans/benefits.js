import React from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"

function Benefits(props) {
  return (
    <section className="container-Benefits">

      <h2 className="tittle-benefits-1">Internet 100% <br /> fibra óptica</h2>
      <div className="divisor"></div>

      <div className="carrossel-Benefits">
        <div className="grade">
          <div className="slides">
            <div className="slide primeira">
              <img src={require('./img/card.png')} alt='Clube de desconto' />
              <h5>Clube de desconto</h5>
              <p>Descontos em várias lojas, cinema e restaurante por toda SP. E olha que não falamos das compras por app de entrega ainda.</p>
            </div>
          </div>

          <div className="slide">
            <img src={require('./img/wifi6.png')} alt='Wi-Fi 6' />
            <h5>Wi-Fi 6</h5>
            <p>Já imaginou a sua internet com o que tem mais atual quando o assunto é conexão?
              <br />Já estamos no Wi-Fi 6, faça parte da ultravelocidade.
            </p>
          </div>
          <div className="slide">
            <img src={require('./img/card.png')} alt='Clube de desconto' />
            <h5>Clube de desconto</h5>
            <p>Descontos em várias lojas, cinema e restaurante por toda SP. E olha que não falamos das compras por app de entrega ainda.</p>
          </div>

        </div>
      </div>

      <div id="canais">
        <h2 className="tittle-benefits-2">De um HAYP na sua Tv</h2>
        <div className="divisor"></div>

        <h5 className="tittle-benefits-1">Canais abertos</h5>
        <div className="container-canais">
          <div className="container-canais-aberto">
            <div className="carrossel-canais">
              <img src={require('./img/canal-band.png')} alt='Canal Band' />
              <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
              <img src={require('./img/canal-sbt.png')} alt='Canal SBT' />
              <img src={require('./img/canal-band.png')} alt='Canal Band' />
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

        <div id="bt-assinar">
          <a href="https://api.whatsapp.com/send?phone=551128762641" target="_blanck">Assine agora</a>
        </div>

      </div>

      <div>
        <h5 className="tittle-benefits-2"> O Combo <br /> completo <span>!!!</span></h5>
        <img src={require('./img/combo-telefone.png')} alt='Combo completo' />

        
        <p>Agora você pode montar o seu combo de <spam className="name-marca">Internet</spam>, <spam className="name-marca">Tv</spam> e/ou <spam className="name-marca">Fixo</spam> com a Hayp. <span className="name-marca">HAYP</span>.</p>

        <h5>
          Todos os combos recebem <br/> <spam className="name-marca">Bônus de Mega</spam>
        </h5>

        <div>
          <div>
            <p className="combo-assinando">Assinando</p>
            <img src={require('./img/combo-simples.png')} alt='Combo simples' />
            <p>
            Você ganha mais 100 mega de bônus
            </p>
            </div>

          <div>
            <p className="combo-assinando">Assinando o <br/> <spam className="name-marca" >combo completo</spam></p>
            <img src={require('./img/combo-completo.png')} alt='Combo Completo' />
            <p >
            Você ganha mais 200 mega de bônus
            </p>
            </div>
        </div>

        <div id="bt-assinar">
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