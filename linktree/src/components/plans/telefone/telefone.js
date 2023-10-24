import '../telefone/Telefone.css'

function Telefone() {
    return (
        <>
            <div className='contianer-telefone'>
                <h3 className='tittle-benefits-2'>Telefone Fixo<br />Ilimitado</h3>
                <div className="Lista-Telefone">
                    <ul>

                        <li>
                            <img src={require('../beneficios/img/icone-telefone.png')} alt='Sua casa com Telefone' />
                            Portabilidade gratuita</li>
                        <li>
                            <img src={require('../beneficios/img/icone-telefone.png')} alt='Sua casa com Telefone' />
                            Ligações ilimitada para fixo<br />e móvel em todo brasil</li>
                        <li>
                            <img src={require('../beneficios/img/plus-telefone.png')} alt='Sua casa com Telefone' />
                            100 Mega de Bônus</li>
                    </ul>

                    <img
                        src={require('../beneficios/img/telefone.png')} alt='Usando o telefone HAYP'
                    />
                </div>

                <div className="icones-telefone">
                    <ul className="lista-Telefone-Icone">
                        <li>
                            <img src={require('../beneficios/img/casa-telefone.png')} alt='Sua casa com Telefone' />
                            <p>Para sua casa</p>
                        </li>
                        <li>
                            <img src={require('../beneficios/img/negocio-telefone.png')} alt='Sua casa com Telefone' />
                            <p>Para sua casa</p>
                        </li>
                    </ul>
                </div>

                <a className="bt-assinar" href="https://wa.me/551128762641?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+plano+com+Telefone+Fixo">Saiba mais</a>
            </div>
        </>
    )
}

export default Telefone;