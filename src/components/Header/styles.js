import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 150px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-color: var(--white);
`

export const Logo = styled.div`
    display: flex ;
    justify-content: space-between;
    align-items: center;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    img {
        width: 35px;
        margin-right: 10px;
    } 
    
    span {
        font-weight: 700;
    }
`

export const Menu = styled.div`
    display: flex ;
    justify-content: space-between;
    align-items: center;
    
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid var(--gray);
        border-radius: 5px;
        padding: 7px 10px;

        &:hover {
            background-color: var(--gray);
            transition: all 300ms ease-in-out;
        }
    }
   
    img {
        width: 25px;
        margin-right: 10px;        
    }

    span {
        font-weight: 700;
    }
`