import styled from "styled-components";

export const Container = styled.textarea`
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 150px;
    min-height: 150px;
    max-width: 100%;
    min-width: 100%;
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