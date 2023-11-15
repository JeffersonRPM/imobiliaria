import React from 'react';
import { Container, Item, Termo } from "./styles";
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Linkedin from '../../assets/linkedin.png';
import Message from '../../assets/message.png';
import Whatsapp from '../../assets/whatsapp.png';

const Footer = () => {
    return (
        <Container>
            <Item>
                <a href="#"><img className='facebook' src={Facebook} alt="Iconee do Logo do Facebook" /></a>
                <a href="#"><img className='instagram' src={Instagram} alt="Icone do Logo do Instagram" /></a>
                <a href="#"><img className='twitter' src={Twitter} alt="Icone do Logo do Twitter" /></a>
                <a href="#"><img className='youtube' src={Youtube} alt="Icone do Logo do Youtube" /></a>
                <a href="#"><img className='linkedin' src={Linkedin} alt="Icone do Logo do Linkedin" /></a>
                <a href="#"><img className='whatsapp' src={Whatsapp} alt="Icone do Logo do Whatsapp" /></a>
                <a href="#"><img className='message' src={Message} alt="Icone de mensagem" /></a>
            </Item>
            <Termo>
                <a href="#"><span>Termo de Uso</span></a>
                <p>&#8226;</p>
                <a href="#"><span>Política de Privacidade</span></a>
                <p>&#8226;</p>
                <a href="#"><span>Política de Cookies</span></a>
            </Termo>
        </Container>
    )
}

export default Footer;
