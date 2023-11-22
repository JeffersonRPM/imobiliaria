import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    
    &::before {
        background-color: rgba(0,0,0,0.5);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    @media (max-width: 480px) {
        display: flex;
        padding: 25px 20px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 50px 100px;
    }
`

export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    word-wrap: break-word; 

    h2 {
        color: var(--white);
        font-size: 3.875rem;
        font-weight: 700;
        margin-bottom: 25px;
    }

    p {
        color: var(--white);
        margin-bottom: 25px;
        font-weight: 700;
    }

    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h2 { 
            font-size: 2.5rem;
        }

        p {
            font-size: 1rem;
        }
    }
`