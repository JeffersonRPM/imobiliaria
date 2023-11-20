import React, { Fragment, useEffect, useState } from 'react'
import { Header, Wrapper } from './styles';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import Api from '../../services/Api';

const Home = () => {
    const [imovel, setImovel] = useState([]);
    useEffect(() => {
        Api.get('/listimovel')
            .then((response) => {
                setImovel(response.data);
            })
            .catch(() => {
                console.log("Erro: Erro no Sistema!");
            })
    }, [])

    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre o imóvel dos seus sonhos!</h2>
            </Header>
            <Wrapper>
                {imovel.map(items => (
                    <Card 
                        key={items.id}
                        thumb={items.thumb}
                        tipo={items.tipo}
                        endereco={items.endereco}
                        valor={items.valor}
                        slug={items.slug}
                    />
                ))}   
            </Wrapper>
        </Fragment>
    )
}

export default Home;
