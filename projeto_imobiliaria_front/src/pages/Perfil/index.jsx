import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextArea from '../../components/TextArea';
import { Container, Form, Left, Message, Right } from "./styles";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, formatPhoneNumber } from "../../context/utils";

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
                if (!response.data.error === true) {
                    toast.error(response.data.message);
                } else {
                    toast.success(response.data.message);
                    setTimeout(function () { window.location.href = '/'; }, 4000);
                }
            })
            .catch(() => {
                toast.error("Apenas imagens JPG, JPEG e PNG são suportadas.");
                console.log("Erro: Erro ao cadastrar imóvel")
            });
    }
    return (
        <Container>
            <Left>
                <h2>Minhas mensagens</h2>
                {message && message.map((item, index) => (
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
                        maxLength={30}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Informe seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={30}
                        required
                    />
                    <Input
                        type="text"
                        name="telefone"
                        placeholder="Informe o telefone de contato"
                        onKeyPress={(e) => {
                            const keyCode = e.keyCode || e.which;
                            const keyValue = String.fromCharCode(keyCode);
                            if (!/^\d+$/.test(keyValue))
                                e.preventDefault();
                        }}
                        onInput={(e) => {
                            const val = e.target.value;
                            const formatted = formatPhoneNumber(val);
                            e.target.value = formatted;
                            setTelefone(formatted);
                        }}
                        maxLength={11}
                        required
                    />
                    <Input
                        type="text"
                        name="tipo"
                        placeholder="Informe o tipo do imóvel"
                        onChange={(e) => setTipo(e.target.value)}
                        maxLength={13}
                        required
                    />
                    <Input
                        type="text"
                        name="endereco"
                        placeholder="Informe o endereço do imóvel"
                        onChange={(e) => setEndereco(e.target.value)}
                        maxLength={30}
                        required
                    />
                    <Input
                        type="text"
                        name="cidade"
                        placeholder="Informe a cidade do imóvel"
                        onChange={(e) => setCidade(e.target.value)}
                        required
                        maxLength={15}
                    />
                    <Input
                        type="text"
                        name="uf"
                        placeholder="UF"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
                        }}
                        onChange={(e) => setUf(e.target.value)}
                        maxLength={2}
                        required
                    />
                    <Input
                        type="number"
                        name="valor"
                        placeholder="Informe a valor do imóvel"
                        onChange={(e) => setValor(e.target.value)}
                        maxLength={10}
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