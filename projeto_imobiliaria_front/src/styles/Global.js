import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary: #f7f9fc;
        --gray: #d9d9d9;
        --light-gray: #f0f2f5;
        --black: #000000;
        --white: #ffffff;
        --green: #42b72a;
    }

    body {
        background-color: var(--primary);
        color: var(--black);
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
