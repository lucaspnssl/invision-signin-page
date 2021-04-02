import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --green-300: #A9C5BA;
        --gray-300: #A9C5BA;
        --gray-700: #707070;
        --red-300: #C53030;

        --regular: 400;
        --heavy: 900;

        --size-logo: 2.2rem;
        --size-title: 1.875rem;
        --size-description: 1.25rem;
        --size-body: 0.875rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }        
    }

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Muli', sans-serif;
        font-weight: 400;
    }    

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }    
`;
