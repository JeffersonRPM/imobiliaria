import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
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
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    padding: 0 20px 0 20px;

    h2 {
        text-align: center;
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
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    background-color: var(--white);
    border-radius: 5px;
    border-color: var(--gray);
    border: 1px solid var(--gray);

    span {
        font-weight: 700;
    }

    p {
        margin-top: 20px;
    }
`