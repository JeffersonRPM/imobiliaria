import React from 'react'
import Login from '../../assets/login.png'
import Home from '../../assets/home.png'
import { Container, Logo, Menu } from './styles';

const Header = () => {
    return (
        <Container>
            <Logo>
                <ul>
                    <li>
                        <img src={Home} alt="icone de uma casa, ao clicar volta para pagina inicial" />
                        <span>Imobiliária</span>
                    </li>
                </ul>
            </Logo>
            <Menu>
                <ul>
                    <li>
                        <img src={Login} alt="icone de uma pessoa"></img>
                        <span>Entrar</span>
                    </li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;
