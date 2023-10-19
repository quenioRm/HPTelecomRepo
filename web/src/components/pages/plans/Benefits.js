import React from "react";
import { useState } from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"
import Telefone from "./Telefone";

function Benefits(props) {
    return (
        <section className="container-Benefits">

            <h2 className="tittle-benefits-1">Principais benefícios</h2>
            <div className="divisor"></div>


            {/*Beneficios*/}
            <div className="carrossel-Benefits">
                <div className="grade">
                    <div className="slides">
                        <div className="slide primeira">
                            <img src={require('./img/card.png')} alt='Clube de desconto' />
                            <h5>Clube de desconto <br /> exclusivo HAYP</h5>
                            <p>Economize em suas compras com nosso Clube de Desconto exclusivo, aproveitando ofertas especiais em diversos produtos e serviços.
                            </p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={require('./img/365.png')} alt='Pacote Microsoft 365 Completo' />
                        <h5>Pacote Microsoft <br /> 365 Completo</h5>
                        <p>Tenha acesso às ferramentas essenciais do Microsoft 365 para aumentar sua produtividade, como Word, Excel e Outlook, para trabalhar de forma mais eficiente.
                        </p>
                    </div>

                    <div className="slide">
                        <img src={require('./img/cofrinho.png')} alt='Sem multa por cancelamento' />
                        <h5>Sem multa <br /> por cancelamento</h5>
                        <p>Oferecemos a flexibilidade de cancelar nossos serviços a qualquer momento, sem custos adicionais, para que você tenha total controle sobre sua assinatura.
                        </p>
                    </div>

                    <div className="slide">
                        <img src={require('./img/instalacao.png')} alt='Instalação Personalizada' />
                        <h5>Instalação <br /> personalizada</h5>
                        <p>Nossa equipe de especialistas está pronta para personalizar a instalação de acordo com suas necessidades, garantindo que sua experiência seja adaptada às suas preferências.
                        </p>
                    </div>

                </div>
            </div>

            {/*Começo dos Canais*/}
            <div id="canais">
                <h2 className="tittle-benefits-2">De um Hayp na sua TV</h2>
                <div className="divisor"></div>

                <h5 className="tittle-benefits-2">Canais abertos</h5>
                <div className="container-canais">
                    <div className="container-canais">
                        <div className="carrossel-canais-aberto">
                            <img src={require('./img/canal-band.png')} alt='Canal Band' />
                            <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
                            <img src={require('./img/canal-sbt.png')} alt='Canal SBT' />
                            <img src={require('./img/canal-record.png')} alt='Canal Record' />
                            <img src={require('./img/canal-cultura.png')} alt='Rede Cultura' />

                        </div>
                    </div>
                </div>

                <a href="#">Veja todos os canais abertos</a>

                <div className="container-canais">
                    <h5 className="tittle-benefits-2">Canais fechados</h5>
                    <div className="container-canais">
                        <div className="carrossel-canais">
                            <img src={require('./img/canal-warner.png')} alt='Canal Warner' />
                            <img src={require('./img/canal-discovery.png')} alt='Canal Discovery' />
                            <img src={require('./img/canal-espn.png')} alt='Canal ESPN' />
                            <img src={require('./img/canal-tlc.png')} alt='Canal TLC' />
                            <img src={require('./img/canal-animal.png')} alt='Canal Animal Planet' />

                        </div>
                        
                    </div>
                </div>

                <a href="#">Veja todos os canais fechados</a>

            </div>

            <Telefone />



            <div hidden>
                {/*Começo do Combo de telefone*/}
                <h5 className="tittle-benefits-3"> Monte um combo e ganhe <br />  <span style={{ color: "#04CB3A" }}>MEGAS de bônus</span>!!</h5>
                <div>
                    <p className="combo-assinando">Assinando</p>
                    <img src={require('./img/combo-simples.png')} alt='Combo simples' />
                    <p>
                        Você ganha mais <spam className="name-marca-destaque">100 Mega</spam> de bônus
                    </p>
                </div>
                <div className="combo-telefone">
                    <h5 className="tittle-benefits-1">Assinando <br /> combo completo</h5>
                    <div className="divisor"></div>
                    <img src={require('./img/combo-completo.png')} alt='Combo completo' />
                    <p>
                        Você ganha mais <spam className="name-marca-destaque">200 Mega</spam> de bônus
                    </p>
                    <h5 className="tittle-benefits-2">O combo perfeito</h5>
                    <p>Monte um completo completo e desfrute  de toda experiência que só é possível com a <span className="name-marca">Hayp</span>.</p>
                </div>
                <div className="bt-assinar">
                          <a href="#">Assine agora</a>
                        </div>
                {/*Começo para as perguntas frequentes*/}
                <div hidden className="contatos-para-assinar">
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
            </div>

            

        </section>

        




    )
}
export default Benefits;