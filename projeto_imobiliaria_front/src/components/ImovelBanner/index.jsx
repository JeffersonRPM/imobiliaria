import React from 'react';
import { Container, Text } from "./styles";
import { urlApi } from '../../services/Api';

const ImovelBanner = ({tipo, descricao, thumb}) => {
    const imgUrl = `${urlApi}/uploads/${thumb}`;

    const descCurta = descricao && descricao.length > 100 ? descricao.substring(0, 100) + "..." : descricao;

    return (
        <Container style={{ backgroundImage: `url(${imgUrl})`}}>
            <Text>
                <h2>{tipo}</h2>
                <p>{descCurta}</p>
            </Text>
        </Container>
    )
}

export default ImovelBanner;
