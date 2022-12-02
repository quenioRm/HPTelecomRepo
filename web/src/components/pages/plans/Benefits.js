import React from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"

function Benefits(props) {
    return (
        <section className="container-Benefits">
            
                <h2 className="tittle-benefits-1">Principais benefícios</h2>
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
                    <h2 className="tittle-benefits-2">Canais</h2>
                    <div className="divisor"></div>

                    <h5 className="tittle-benefits-1">Canais abertos</h5>
                    <div className="container-canais">
                        <div className="container-canais">
                            <div className="carrossel-canais">
                                <img src={require('./img/canal-band.png')} alt='Canal Band' />
                                <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
                                <img src={require('./img/canal-sbt.png')} alt='Canal SBT' />
                            </div>
                        </div>
                    </div>

                    <a href="#">Veja todos os canais abertos</a>

                        <div className="container-canais">
                            <h5 className="tittle-benefits-1">Canais fechados</h5>
                            <div className="container-canais">
                                <div className="carrossel-canais">
                                    <img src={require('./img/canal-warner.png')} alt='Canal Warner' />
                                    <img src={require('./img/canal-discovery.png')} alt='Canal Discovery' />
                                    <img src={require('./img/canal-espn.png')} alt='Canal ESPN' />
                                    <img src={require('./img/canal-tlc.png')} alt='Canal TLC' />
                                </div>
                            </div>
                        </div>

                        <a href="#">Veja todos os canais fechados</a>
                    
                </div>
                
                <div>
                    <h5 className="tittle-benefits-2">Alô, <br /> quem fala?</h5>
                <img src={require('./img/combo-telefone.png')} alt='Canal Globo' /> 

                <p>Fale a vontade</p>

                <h5 className="tittle-benefits-1">O combo perfeito</h5>
                <p>Monte um completo completo e desfrute  de toda experiência que só é possível com a <span className="name-marca">Hayp</span>.</p>
                </div>

                <div className="contatos-para-assinar">
                    <h2 className="tittle-benefits-1">Perguntas frequentes</h2>
                    <div className="divisor"></div>

                    <Perguntas_Frequentes
                    perguntas = "Posso contratar apenas a  internet ?"
                    resposta = "Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
                    />

                    <Perguntas_Frequentes
                    perguntas = "Eu posso contratar um combo para o meu comércio ?"
                    resposta = "Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
                    />

                    <Perguntas_Frequentes
                    perguntas = "No céu tem pão ?"
                    resposta = "Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
                    />

                </div>
                
                
                
            </section>


            

            )
}
            export default Benefits;