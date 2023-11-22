import React, { useEffect, useState } from 'react';
import { Container, Text } from "./styles";
import { urlApi } from '../../services/Api';

const ImovelBanner = ({ tipo, descricao, thumb }) => {
    const [descCurta, setDescCurta] = useState("");
    const imgUrl = `${urlApi}/uploads/${thumb}`;

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let descLength;

            if (windowWidth <= 480) {
                descLength = 30;
            } else if (windowWidth <= 1024) {
                descLength = 70;
            } else {
                descLength = 100;
            }

            setDescCurta(
                descricao && descricao.length > descLength
                    ? descricao.substring(0, descLength) + "..."
                    : descricao
            );
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => window.removeEventListener("resize", handleResize);
    }, [descricao]);

    return (
        <Container style={{ backgroundImage: `url(${imgUrl})` }}>
            <Text>
                <h2>{tipo}</h2>
                <p>{descCurta}</p>
            </Text>
        </Container>
    )
}

export default ImovelBanner;
