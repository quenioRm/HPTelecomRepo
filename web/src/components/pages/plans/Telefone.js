import "./telefone.css"
const Telefone = () => {
    return (
        <>
            <h3 className="Tittle-Telefone" >Telefone Fixo Ilimitado</h3>

            <div className="telefone">
                <div className="telefone-lista">
                    <ul className="lista-total-tel">
                        <li className="list-Telefone">
                            <img className="bola" src={require('./img/bola.png')} alt='Clube de desconto' />
                            <p>Portabilidade gratuita</p>
                        </li>
                        <li className="list-Telefone">
                            <img className="bola" src={require('./img/bola.png')} alt='Clube de desconto' />
                            <p>Ligações ilimitadas</p>
                        </li>
                        <li className="list-Telefone">
                            <img className="bola" src={require('./img/plus.png')} alt='Clube de desconto' />
                            <p>100 Mega de Bônus</p>
                        </li>
                    </ul>
                    <div className="icone-telefone">
                        <div className="icone">
                        <img className="icone" src={require('./img/casa.png')} alt='Clube de desconto' />
                            <p>Para sua casa</p>
                        </div>
                        <div className="icone">
                        <img src={require('./img/negocio.png')} alt='Clube de desconto' />
                            <p>Para o seu negócio</p>
                        </div>
                    </div>

                    <div>
                        <a href="https://wa.me/551128762641" target="_blank"><input className="bt-tel" type="button" name="saiba-mais-tel" value="Saiba mais"></input></a>
                    </div>
                </div>

                <div className="img-tel">
                <img src={require('./img/img-tel.png')} alt='Clube de desconto' />
                </div>
            </div>
        </>
    )
}

export default Telefone;