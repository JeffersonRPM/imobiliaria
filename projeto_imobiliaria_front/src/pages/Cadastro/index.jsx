import React, { useState } from 'react';
import { Container, ContainerForm, Form } from "./styles";
import Input from '../../components/Input'
import Api from '../../services/Api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Cadastro = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const InputValue = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Api.post('/createusers', data)
            .then((response) => {
                if (!response.data.error === true) {
                    toast.success(response.data.message);
                    history.push('/login');
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(() => {
                console.log('Erro: Erro no Sistema!')
            })
    };


    return (
        <Container>
            <ContainerForm>
                <h2>Cadastre-se</h2>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                    <Input type="text" name="name" placeholder='Nome' maxLength={35} onChange={InputValue} required />
                    <Input type="email" name="email" placeholder='E-mail' maxLength={35} onChange={InputValue} required />
                    <Input type="password" name="password" placeholder='Senha' maxLength={35} onChange={InputValue} required />
                    <button type="submit" className='new-account'>Cadastre-se</button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;
