import React from 'react'
import Login from '../../assets/login.png'
import Exit from '../../assets/exit.png'
import Home from '../../assets/home.png'
import { Container, Logo, Menu } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    const userLogged = localStorage.getItem('login');
    const handleLogoff = () => {
        localStorage.clear();
        window.location.href='/login';
    }

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
                {!userLogged ?
                    <Link to='/login'>
                        <ul>
                            <li>
                                <img src={Login} alt="icone de uma pessoa"></img>
                                <span>Entrar</span>
                            </li>
                        </ul>
                    </Link>
                    :
                    <Link onClick={handleLogoff}> 
                        <ul>
                            <li>
                                <img src={Exit} alt="icone de sair"></img>
                                <span>Sair</span>
                            </li>
                        </ul>
                    </Link>
                }
            </Menu>
        </Container>
    )
}

export default Header;
