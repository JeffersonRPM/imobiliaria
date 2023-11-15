import React from 'react';
import { Container, ContainerForm } from "./styles";
import Input from '../../components/Input'

const Cadastro = () => {
    return (
        <Container>
            <ContainerForm>
                <h2>Cadastre-se</h2>
                <Input type="text" placeholder='Nome ' maxlength="35" />
                <Input type="text" placeholder='E-mail ' maxlength="35" />
                <Input type="text" placeholder='Senha ' maxlength="35" />
                <button className='new-account'>Cadastre-se</button>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;
