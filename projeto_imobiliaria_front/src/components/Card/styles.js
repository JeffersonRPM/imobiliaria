import styled from "styled-components";

export const Container = styled.div`
    width: 24%;
    margin-bottom: 12px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    border-radius: 5px;
`

export const Img = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
`

export const Description = styled.div`
    padding: 12px;

    a {
        color: var(--black);
    }

    h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    img {
        width: 20px;
    }

    div.arrow {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div.arrow img {
        align-self: center;
        height: 20px;
    }
`

export const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    span {
        margin-bottom: 10px;
    }

    img {
        width: 15px;
    }
`



