import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 25px 20px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 20px 100px;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    padding: 0 25px 0 25px;
    background-color: var(--light-gray);
    border-radius: 5px;

    h2 {
        text-align: center;
        margin: 25px 0 25px 0;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        h2 {
            font-size: 1.5rem;
        }
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    padding: 0 0 0 20px;

    h2 {
        text-align: center;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0 0 25px 0;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 0;
        h2 {
            font-size: 1.5rem;
        }
    }
`

export const Form = styled.form`
    background-color: var(--light-gray);
    padding: 0 25px 0 25px;
    border-radius: 5px;

    h2 {
        margin: 25px 0 25px 0;
    }

    div.fileAjuste Input {
        padding-top: 12px;
        background-color: var(--white);
    }

    .btnAjuste {
        margin-top: 15px !important;
        margin-bottom: 25px;
    }   

    input[type="number"]::-webkit-inner-spin-button, 
    input[type="number"]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 15px;
    margin-bottom: 10px;
    background-color: var(--white);
    border-radius: 5px;
    border-color: var(--gray);
    border: 1px solid var(--gray);
    overflow: auto;
    word-wrap: break-word; 

    span {
        font-weight: 700;
    }

    p {
        margin-top: 20px;
    }
`