import styled from "styled-components";

export const BenefitsContainerStyled = styled.div`
    background-color: var(--yellow);
    display: flex;
    justify-content: center;
    color: var(--blue);
`

export const BenefitsWrapper = styled.section`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        padding: 50px 30px;
    }
`

export const BenefitItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    width: 33%;
    .benefit-icon {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const BenefitText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .benefit-title {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 18px;
    }

    .benefit-description {
        font-size: 14px;
        font-weight: 400;
    }
`