import React, { Fragment, useEffect, useState } from 'react';
import { Container, Description, Left, Profile, ProfileContact, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import ImovelBanner from '../../components/ImovelBanner';
import Perfil from '../../assets/perfil.png';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Api, { urlApi } from '../../services/Api';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

const Imovel = () => {
    const { slug } = useParams();
    const [dataimovel, setDataImovel] = useState([]);

    useEffect(() => {
        Api.get(`/listimovel/${slug}`)
            .then((response) => {
                setDataImovel(response.data);
            })
            .catch(() => {
                console.log('Erro: Erro ao Listar o Imóvel!')
            })
    }, [slug])

    const { tipo, cidade, endereco, descricao, thumb, name, telefone, email, userId } = dataimovel;

    const [client_name, setClientName] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [client_mensagem, setClientMensagem] = useState('');

    const dataMessage = { client_name, client_email, client_mensagem, userId };
    const handleSubmit = (e) => {
        e.preventDefault();
        Api.post('/createmessage', dataMessage)
            .then((response) => {
                if (!response.data.error === true) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(() => {
                console.log('Erro: Erro no Sistema!')
            })
    };

    return (
        <Fragment>
            <ImovelBanner
                tipo={tipo}
                descricao={descricao}
                thumb={thumb}
            />
            <Container>
                <Left>
                    <Thumb>
                        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
                    </Thumb>
                    <Description>
                        <h3>{tipo}</h3>
                        <h5>{`${endereco}, ${cidade}`}</h5>
                        <p>{descricao}</p>
                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img src={Perfil} alt="Foto de perfil" />
                        </ProfileImg>
                        <h3>{name}</h3>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações</h3>
                        <p>{telefone}</p>
                        <p>{email}</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate o anunciante</h3>
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <Input type="hidden" name="userId" value={userId} />
                            <Input type="text" name="client_name" placeholder='Nome'
                                onChange={(e) => setClientName(e.target.value)}
                                maxLength={40} />
                            <Input type="text" name="client_email" placeholder='E-mail'
                                onChange={(e) => setClientEmail(e.target.value)}
                                maxLength={40} />
                            <TextArea name="client_mensagem" id="" cols="30" rows="10" placeholder='Mensagem'
                                onChange={(e) => setClientMensagem(e.target.value)}
                                maxLength={800} />
                            <Button>Enviar mensagem</Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}

export default Imovel;
