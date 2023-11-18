import React from 'react';
import { Container, ContainerForm, Form } from "./styles";
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <ContainerForm>
                <h2>Login</h2>
                <Form>
                    <Input type="text" placeholder='E-mail ' maxlength="35" required />
                    <Input type="text" placeholder='Senha ' maxlength="35" required />
                    <Button>Entrar</Button>
                    <Link to='/cadastro'>
                        <button className='new-account'>Criar nova conta</button>
                    </Link>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Login;
