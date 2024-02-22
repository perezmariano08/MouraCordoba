import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --yellow: #ffbf3c;
        --blue: #00205C;
        --green: #46B450;
        /* Gray Scale */
        --white: #fafafa;
        --gray-100: #e9ebed;
        --gray-200: #CACDD2;
        --gray-300: #9FA4A9;
        --gray-400: #73787E;
        --gray-500: #464C52;
        --gray-600: #26282B;
        --gray-700: #1B1D1F;
        --black: #121212;
    }

    html {
        scroll-behavior: smooth;
    }
    .no-scroll {
    overflow: hidden;
    }
    img {
        user-select: none;
    }

    body {
        background-color: var(--white);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Poppins', 'sans-serif';
        font-weight: 400;
        font-style: normal;
    }


    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
    }

    div.wrapper {
        display: flex;
        width: 100%;
        max-width: 1200px;

        @media (max-width: 1260px) {
            padding: 50px 30px;
        }
    }

    p {
        font-size: 18px;
        font-weight: 300;
        color: var(--gray-100);
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    h1, h1 span {
        font-size: 36px;
        line-height: 36px;
        font-weight: 600;

        @media (max-width: 1260px) {
            font-size: 30px;
            line-height: 30px;
        }
    }
    
    h2 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
    }
`