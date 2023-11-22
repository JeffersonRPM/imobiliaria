import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 25px 150px;
    background-color: var(--gray);
    height: 150px;
    border-top: 1px solid rgba(0,0,0,0.1);

    @media (max-width: 480px) {
        padding: 25px 20px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 25px 50px;
    }
`

export const Item = styled.div`

    display: flex;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
    }

    img.facebook,
    img.instagram,
    img.twitter,
    img.youtube,
    img.linkedin,
    img.whatsapp,
    img.message {
        width: 35px;
        height: 35px;
        margin: 5px;
        border-radius: 50%;

        &:hover {
            background-color: var(--primary);
            transition: all 300ms ease-in-out;
        }
    }
`

export const Termo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
        color: var(--black);
    }

    span {
        margin: 0px 10px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`


