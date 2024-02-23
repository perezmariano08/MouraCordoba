import styled from "styled-components";

export const BatteriesContainerStyled = styled.section`

`

export const BatteriesWrapper = styled.div`
    flex-direction: column;
    gap: 65px;
`

export const BatteriesCars = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
`

export const BatteriesTrucks = styled(BatteriesCars)`

`

export const BatteriesTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    h2 {
        width: 300px;
        color: var(--blue);
    }

    h2 span {
        color: var(--blue-light);
    }

    p {
        color: var(--blue);
        width: 750px;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: start;
        h2, p {
            width: 70%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        h2, p {
            width: 100%;
        }
    }
`

export const BatteriesProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 25px;
    flex-wrap: wrap;
    row-gap: 120px;

    @media (max-width: 1200px) {
        /* flex-direction: column;
        align-items: start;
        h2, p {
            width: 70%;
        } */
    }
`

export const CardBateryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--blue);
    border-radius: 30px;
    max-width: 380px;
    padding: 65px 30px 40px 30px;
    color: var(--white);
    position: relative;
    box-shadow: -5px 16px 31px -16px rgba(0,0,0,0.56);
    -webkit-box-shadow: -5px 16px 31px -16px rgba(0,0,0,0.56);
    -moz-box-shadow: -5px 16px 31px -16px rgba(0,0,0,0.56);

    img {
        position: absolute;
        top: -50px;
        left: 0;
        right: 0;
        margin: auto;
        height: 100px;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }

    p {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`