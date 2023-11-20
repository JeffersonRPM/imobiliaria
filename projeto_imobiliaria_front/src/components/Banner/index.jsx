import React from 'react'
import { Container, Text } from './styles';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container>
            <Text>
                <h2>Sua Felicidade Começa Aqui</h2>
                <p>Transformando Sonhos em Realidade com Conforto e Segurança</p>
                <Link to='/perfil'>
                    <span>Cadastre seu anúncio</span>
                </Link>
            </Text>
        </Container>
    )
}

export default Banner;
