import React, { useState } from 'react';
import { Container, ContainerForm, Form } from "./styles";
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';
import { AppAuth } from '../../context/AppAuth';

const Login = () => {
    const auth = AppAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        await auth.authenticate(email, password);
    }

    return (
        <Container>
            <ContainerForm>
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <Input type="email" name='email' placeholder='E-mail' maxLength={35}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <Input type="password" name='password' placeholder='Senha' maxLength={35}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <Button type='submit'>Entrar</Button>
                    <Link to='/cadastro'>
                        <button className='new-account'>Criar nova conta</button>
                    </Link>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Login;
