import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 500px;
    text-align: center;

    button.new-account {
        display: inline-block;
        text-align: center;
        width: 200px;
        background-color: var(--green);
        color: var(--white);
        padding: 12px 20px;
        border-radius: 5px;
        border: none;
        line-height: 24px;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 15px;
        cursor: pointer;

        &:hover {
            background-color: var(--gray);
            color: var(--black);
            transition: all 300ms ease-in-out;
        } 
    }

    h2 {
        margin-bottom: 25px;
    }

    p {
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        padding: 25px 20px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 100px 100px;
    }
`

export const ContainerForm = styled.div`
    padding: 50px;
    background-color: var(--light-gray);
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
`

export const Form = styled.form`
    width: 100%;
`
