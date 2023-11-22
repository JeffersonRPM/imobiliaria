import styled from "styled-components";
import BgCover from "../../assets/bg-cover.jpg"

export const Container = styled.div`
    padding: 200px 150px;
    min-height: calc(100vh - 56px);
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(${BgCover});
    
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
        display: flex;
        padding: 200px 100px;
    } 
`

export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;

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

    span {
        background-color: var(--black);
        border: 0;
        border-radius: 5px;
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 700;
        padding: 12px 20px;
        line-height: 24px;
        cursor: pointer;

        &:hover {
            background-color: var(--gray);
            color: var(--black);
            transition: all 300ms ease-in-out;
        }
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

    @media (min-width: 481px) and (max-width: 1024px){
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
`