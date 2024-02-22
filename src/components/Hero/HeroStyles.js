import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    background: linear-gradient(9.1deg, #254CAF 3.49%, #000E28 92.66%);
    position: relative;
    min-height: calc(100vh - 80px);
    @media (max-width: 968px) {
        min-height: auto;
    }
`

export const HeroImageBackground = styled.div`
    position: absolute;
    inset: 0px;
    z-index: 0;
    background-image: url(hex_bg.png);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right center;
    mix-blend-mode: lighten;

    @media (max-width: 968px) {
        display: none;
    }
`

export const HeroWrapper = styled.div`
    gap: 35px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    img {
        width: 520px;
    }
    
    @media (max-width: 968px) {
        flex-direction: column;
        gap: 50px;
        img {
            width: 400px;
        }
    }

    @media (max-width: 460px) {
        flex-direction: column;
        gap: 50px;
        img {
            width: 100%;
        }
    }
`

export const HeroText = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: start;

    h1 span {
        color: var(--yellow);
    }

    p span {
        font-weight: 500;
        color: var(--yellow);
    }
`

export const HeroButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`