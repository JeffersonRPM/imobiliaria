import React from 'react';
import { Container, Description, Img, Item } from "./styles";
import Pin from '../../assets/pin.png'
import Arrow from '../../assets/arrow.png'
import CardImg from '../../assets/card.jpg'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Container>
            <Img>
                <img src={CardImg} alt="Casa branca, com piscina e plantas" />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Item>
                    <span><img src={Pin} alt="Icone de localização" /> Rua das Orquídeas, Amazonas</span>
                    <span>R$ 2.000,00 / mês</span>
                </Item>
                <Link to='/imovel'>
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
