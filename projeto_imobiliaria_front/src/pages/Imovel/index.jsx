import React, { Fragment, useEffect, useState } from 'react';
import { Container, Description, Left, Profile, ProfileContact, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import ImovelBanner from '../../components/ImovelBanner';
import Perfil from '../../assets/perfil.png';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Api, { urlApi } from '../../services/Api';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

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

    const { tipo, cidade, endereco, descricao, thumb, name, telefone, email, /*userid*/} = dataimovel;

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
                    <p className='userDesc'>Com uma paixão por design contemporâneo, transformei este espaço em uma obra-prima de elegância, equilibrando modernidade e conforto.
                        <br /><br />
                        A cozinha é o coração da casa, refletindo minha paixão pela culinária gourmet. Adoro receber amigos aqui. A varanda oferece uma vista espetacular, tornando-se meu refúgio tranquilo no centro da cidade.
                    </p>
                    <ProfileContact>
                        <h3>Informações</h3>
                        <p>{telefone}</p>
                        <p>{email}</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate o anunciante</h3>
                        <form>
                            <Input type="text" placeholder='Nome' maxLength={40} />
                            <Input type="text" placeholder='E-mail' maxLength={40} />
                            <TextArea name="" id="" cols="30" rows="10" placeholder='Mensagem' maxLength={800} />
                            <Button>Enviar mensagem</Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}

export default Imovel;
