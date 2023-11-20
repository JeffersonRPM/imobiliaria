import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextArea from '../../components/TextArea';
import { Container, Form, Left, Message, Right } from "./styles";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage } from "../../context/utils";

const Perfil = () => {
    const [thumb, setThumb] = useState('');
    const [tipo, setTipo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [message, setMessage] = useState([]);

    const user = getLocalStorage();
    const { id } = user;

    const data = { id, thumb, tipo, endereco, cidade, uf, valor, descricao, name, email, telefone }

    useEffect(() => {
        Api.get(`/listmessage/${id}`)
            .then((response) => {
                setMessage(response.data.messagem);
            })
            .catch(() => {
                console.log("Erro: Erro ao listar mensagens")
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'headers': {
                'content-type': 'multipart/form-data'
            }
        }

        Api.post('/createimovel', data, headers)
            .then((response) => {
                if (!response.data.erro === true) {
                    toast(response.data.message);
                } else {
                    toast(response.data.message);
                }
            })
            .catch(() => {
                console.log("Erro: Erro ao cadastrar imóvel")
            });
    }
    return (
        <Container>
            <Left>
                <h2>Minhas mensagens</h2>
                {message.map((item, index) => (
                    <Message key={index}>
                        <span>Nome: {item.client_name}</span>
                        <span>Email: {item.client_email}</span>
                        <p>{item.client_mensagem}</p>
                    </Message>
                ))}
            </Left>
            <Right>
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <h2>Cadastre o Imóvel</h2>
                    <div className="fileAjuste">
                        <Input
                            type="file"
                            name="thumb"
                            onChange={(e) => setThumb(e.target.files[0])}
                            required
                        />
                    </div>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Informe seu nome"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Informe seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="telefone"
                        placeholder="Informe o telefone de contato  •  Ex: (99) 9 9999-9999"
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="tipo"
                        placeholder="Informe o tipo do imóvel  •  Ex: Casa, Apartamento"
                        onChange={(e) => setTipo(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="endereco"
                        placeholder="Informe o endereço do imóvel"
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="cidade"
                        placeholder="Informe a cidade do imóvel"
                        onChange={(e) => setCidade(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="uf"
                        placeholder="UF"
                        onChange={(e) => setUf(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        name="valor"
                        placeholder="Informe a valor do imóvel  •  Ex: 500,00"
                        onChange={(e) => setValor(e.target.value)}
                        required
                    />

                    <TextArea
                        name="descricao"
                        cols="30"
                        rows="10"
                        placeholder="Descrição do imóvel"
                        onChange={(e) => setDescricao(e.target.value)}
                        maxLength={3000}
                        required
                    />
                    <div className="btnAjuste">
                        <Button type="submit">Cadastrar imóvel</Button>
                    </div>
                </Form>
            </Right>
        </Container>
    )
}

export default Perfil;