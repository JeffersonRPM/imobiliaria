import styled from "styled-components";

export const Container = styled.input`
    width: 100%;
    height: 50px;  
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 0.938rem;
    margin-bottom: 10px;
    outline: none;
    border-color: var(--gray);
    border: 1px solid var(--gray);

    &:focus {
        border-color: var(--black);
    }
`