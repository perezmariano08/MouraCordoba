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
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    section {
        display: flex;
        width: 100%;
        max-width: 1200px;
        @media (max-width: 1240px) {
            padding: 0 30px;
        }
    }

    p {
        line-height: 16px;
        font-size: 16px;
        font-weight: 300;
        color: var(--gray-100);
        @media (max-width: 768px) {
            font-size: 14px;
            line-height: 14px;
        }
    }

    h1 {
        font-size: 36px;
        line-height: 36px;
        font-weight: 600;

        @media (max-width: 1240px) {
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