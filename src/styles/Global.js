import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary: #f7f9fc;
        --secondary: #15181c;
        --gray: #d9d9d9;
        --black: #000000;
        --white: #ffffff;
    }

    body {
        background-color: var(--primary);
        color: var(--secondary);
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }


`;
