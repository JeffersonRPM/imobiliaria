import styled from "styled-components";

export const Container = styled.button`
    display: inline-block;
    text-align: center;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    padding: 12px 20px;
    border-radius: 5px;
    border: none;
    line-height: 24px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: var(--gray);
        color: var(--black);
        transition: all 300ms ease-in-out;
    }  
`