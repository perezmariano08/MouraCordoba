import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--blue);
    background-image: url('foto_hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: calc(100vh - 100px);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .6;
    }
`

export const HeroWrapper = styled.section`
    gap: 20px;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 100px 0;

    img {
        height: 200px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 40px 30px;
    }
`

export const HeroText = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: start;

    p span {
        font-weight: 500;
    }
`

export const HeroButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`