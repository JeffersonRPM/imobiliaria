import styled from "styled-components";
import BgCover from '../../assets/bg-cover.jpg'

export const Container = styled.div`
    padding: 50px 150px;
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
`