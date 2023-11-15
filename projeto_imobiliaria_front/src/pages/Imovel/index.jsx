import React, { Fragment } from 'react';
import { Container, Description, Left, Profile, ProfileContact, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import ImovelBanner from '../../components/ImovelBanner';
import Card from '../../assets/card.jpg'
import Perfil from '../../assets/perfil.png'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'

const Imovel = () => {
    return (
        <Fragment>
            <ImovelBanner />
            <Container>
                <Left>
                    <Thumb>
                        <img src={Card} alt="Imagem do apartamento" />
                    </Thumb>
                    <Description>
                        <h3>Apartamento de 3 Quartos com Vista Deslumbrante</h3>
                        <p>
                            Seu novo lar espera por você neste incrível apartamento à venda. Este espaçoso e luminoso apartamento de 3 quartos oferece uma combinação perfeita de conforto, elegância e localização conveniente.
                            <br /><br />
                            Ao entrar, você será recebido por uma sala de estar generosa, perfeita para receber amigos e familiares. As amplas janelas proporcionam uma abundância de luz natural, destacando os detalhes de design e os acabamentos de alta qualidade em todo o espaço.
                            <br /><br />
                            A cozinha moderna é um convite à culinária gourmet, equipada com eletrodomésticos de última geração e uma ilha central que também serve como área de café da manhã. A área de jantar adjacente oferece o cenário perfeito para refeições memoráveis.
                            <br /><br />
                            Os três quartos são espaçosos e aconchegantes, proporcionando o ambiente ideal para descanso e relaxamento. O quarto principal possui um banheiro privativo luxuoso e amplo espaço no armário. Os outros dois quartos compartilham um banheiro bem equipado.
                            <br /><br />
                            Além disso, o apartamento oferece uma varanda privativa com uma vista deslumbrante da cidade, proporcionando o local ideal para relaxar após um longo dia.
                            <br /><br />
                            Localizado em uma área residencial tranquila, mas ainda assim convenientemente próximo a escolas, parques e centros comerciais, este apartamento é uma oportunidade única. Com estacionamento dedicado e uma equipe de segurança 24 horas, você terá a tranquilidade que merece.
                            <br /><br />
                            Esta é sua chance de adquirir um lar que oferece tanto conforto quanto estilo. Não perca esta oportunidade. Agende uma visita e descubra todas as características impressionantes que este apartamento tem a oferecer.</p>
                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img src={Perfil} alt="Foto de perfil" />
                        </ProfileImg>
                        <h3>Oliver Mendes</h3>
                    </Profile>
                    <p className='userDesc'>Com uma paixão por design contemporâneo, transformei este espaço em uma obra-prima de elegância, equilibrando modernidade e conforto.
                        <br /><br />
                        A cozinha é o coração da casa, refletindo minha paixão pela culinária gourmet. Adoro receber amigos aqui. A varanda oferece uma vista espetacular, tornando-se meu refúgio tranquilo no centro da cidade.
                    </p>
                    <ProfileContact>
                        <h3>Informações</h3>
                        <p>(98) 7654-3210</p>
                        <p>teste@teste.com</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate o anunciante</h3>
                        <form>
                            <Input type="text" placeholder='Nome' maxlength="40"/>
                            <Input type="text" placeholder='E-mail' maxlength="40"/>
                            <TextArea name="" id="" cols="30" rows="10" placeholder='Mensagem' maxlength="800"/>
                            <Button>Enviar mensagem</Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}

export default Imovel;
