import React from 'react'
import Login from '../../assets/login.png'
import Home from '../../assets/home.png'
import { Container, Logo, Menu } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <ul>
                        <li>
                            <img src={Home} alt="icone de uma casa, ao clicar volta para pagina inicial" />
                            <span>Imobiliária</span>
                        </li>
                    </ul>
                </Link>
            </Logo>
            <Menu>
                <Link to='/login'>
                    <ul>
                        <li>
                            <img src={Login} alt="icone de uma pessoa"></img>
                            <span>Entrar</span>
                        </li>
                    </ul>
                </Link>
            </Menu>
        </Container>
    )
}

export default Header;
