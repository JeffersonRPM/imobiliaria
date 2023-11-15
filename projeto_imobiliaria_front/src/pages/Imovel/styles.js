import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
`

export const Thumb = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`

export const Description = styled.div`

    h3,
    p {
        text-align: justify;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0;
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
`

export const ProfileFormContact = styled.div`
    h3{
        margin-top: 30px;
        margin-bottom: 15px;
    }
`
