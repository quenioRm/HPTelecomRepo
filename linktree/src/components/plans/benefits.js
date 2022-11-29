import React from "react";
import './benefits.css';

function Benefits(props) {
    return (
        <section className="container-Benefits">
            
                <h2>Internet 100% fibra óptica</h2>
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
                    <h2>Canais</h2>
                    <div className="divisor"></div>

                    <h5>Canais abertos</h5>
                    <div className="container-canais">
                        <div className="carrossel-canais">
                            <img src={require('./img/canal-band.png')} alt='Canal Globo' />
                            <img src={require('./img/canal-globo.png')} alt='Canal Globo' />
                            <img src={require('./img/canal-sbt.png')} alt='Canal Globo' />
                        </div>
                    </div>

                    <a href="#">Veja todos os canais fechados</a>

                        <span className="plus">+</span>
                        <h5>Canais fechados</h5>
                        <div className="container-canais">
                            <div className="carrossel-canais">
                                <img src={require('./img/canal-warner.png')} alt='Canal Globo' />
                                <img src={require('./img/canal-discovery.png')} alt='Canal Globo' />
                                <img src={require('./img/canal-espn.png')} alt='Canal Globo' />
                            </div>
                        </div>

                        <a href="#">Veja todos os canais fechados</a>
                    
                </div>
                
                <div>
                    <h5>Alô, <br /> quem fala?</h5>
                <img src={require('./img/combo-telefone.png')} alt='Canal Globo' /> 

                <p>Fale a vontade</p>

                <h5>O combo perfeito</h5>
                <p>Monte um completo completo e desfrute  de toda experiência que só é possível com a <span style={{color: "#008D1E"}}>Hayp</span>.</p>
                </div>

                <div className="contatos-para-assinar">
                    <h2>Perguntas frequentes</h2>
                    <div className="divisor"></div>
                    
                    <div>
                        <ul className="perguntas">
                            <li className="lista-perguntas">
                            Eu posso contratar um combo para o meu comércio?
                            </li>

                            <li className="lista-perguntas">
                            Eu posso contratar um combo para o meu comércio?
                            </li>

                            <li className="lista-perguntas">
                            Eu posso contratar um combo para o meu comércio?
                            </li>

                            <li className="lista-perguntas">
                            Eu posso contratar um combo para o meu comércio?
                            </li>
                        </ul>
                    </div>

                </div>
                


            </section>

            

            )
}
            export default Benefits;