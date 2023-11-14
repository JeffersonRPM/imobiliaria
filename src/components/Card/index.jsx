import React from 'react';
import { Container, Description, Img, Itens } from "./styles";
import Pin from '../../assets/pin.png'
import Arrow from '../../assets/arrow.png'
import Card1 from '../../assets/card1.jpg'

const Card = () => {
    return (
        <Container>
            <Img>
                <img src={Card1} alt="Casa branca, com piscina e plantas" />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Itens>
                    <span><img src={Pin} alt="Icone de localização" /> Rua das Orquídeas, Amazonas</span>
                    <span>R$ 2.000,00 / mês</span>
                </Itens>
                <a href="#">
                    <div className='arrow'>
                        <span>Detalhes</span>
                        <img src={Arrow} alt="Clique na seta para mais detalhes" />
                    </div>
                </a>
            </Description>
        </Container>
    )
}

export default Card;
