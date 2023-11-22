import styled from "styled-components";

export const Header = styled.div `
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 50px 150px 25px 150px;

    @media (max-width: 480px) {
        padding: 25px 20px 0 20px;
        text-align: center;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 50px 100px 25px 100px;
    }
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 25px 150px;

    @media (max-width: 480px) {
        padding: 25px 20px;
        justify-content: center;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 25px 100px;
    }
`