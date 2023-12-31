import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 25px 20px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        padding: 20px 100px;
    }
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;

    @media (max-width: 480px) {
        width: 100%;
        margin-bottom: 25px;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        width: 50%;
    }
`

export const Thumb = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: auto;
        max-height: 500px;
        border-radius: 5px;
    }
`

export const Description = styled.div`
    word-wrap: break-word; 
    h3,
    h5,
    p {
        text-align: justify;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 30px 0;
    }

    @media (max-width: 480px) {
        h3 {
            margin-top: 15px;
        }

        h5 {
            margin: 10px 0 15px 0;
        }
    }
`

export const Right = styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    text-align: center;

    p {
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px){
        width: 48%;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`

export const ProfileImg = styled.div`
    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const ProfileContact = styled.div`  
    h3,
    p {
        margin-bottom: 15px;
    }

    h3 {
        margin-top: 30px;
    }

    @media (max-width: 480px) {
        h3 {
            margin-top: 15px;
        }
    }
`

export const ProfileFormContact = styled.div`
    h3{
        margin-top: 30px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        h3 {
            margin-top: 15px;
        }
    }
`
