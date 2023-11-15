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
`

export const ProfileFormContact = styled.div`
    h3{
        margin-bottom: 15px;
    }

    form {
        input,
        textarea {
            width: 100%;
            height: 50px;  
            padding: 8px 15px;
            border-radius: 5px;
            font-size: 0.938rem;
            margin-bottom: 10px;
            outline: none;
            border-color: var(--gray);
            border: 1px solid var(--gray);
        }

        input:focus,
        textarea:focus {
            border-color: var(--black);
        }

        textarea {
            font-family: 'Open Sans', sans-serif;
            height: 150px;
            max-width: 100%;
            min-width: 100%;
        }

        button {
            display: inline-block;
            text-align: center;
            width: 100%;
            background-color: var(--black);
            color: var(--white);
            padding: 12px 20px;
            border-radius: 5px;
            border: none;
            line-height: 24px;
            font-size: 0.875rem;
            font-weight: 700;
            cursor: pointer;

            &:hover {
                background-color: var(--gray);
                color: var(--black);
                transition: all 300ms ease-in-out;
            }
        }
    }
`
