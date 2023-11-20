import React from 'react';
import { Container, Description, Img, Item } from "./styles";
import Pin from '../../assets/pin.png'
import Arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom';
import { urlApi } from '../../services/Api';

const Card = ({ thumb, tipo, endereco, valor, slug }) => {
    return (
        <Container>
            <Img>
                <img src={`${urlApi}/uploads/${thumb}`} alt="" />
            </Img>
            <Description>
                <h4>{tipo}</h4>
                <Item>
                    <span><img src={Pin} alt="Icone de localização" /> {endereco}</span>
                    <span>R$ {valor} / mês</span>
                </Item>
                <Link to={`/imovel/${slug}`}>
                    <div className='arrow'>
                        <span>Detalhes</span>
                        <img src={Arrow} alt="Clique na seta para mais detalhes" />
                    </div>
                </Link>
            </Description>
        </Container>
    )
}

export default Card;
