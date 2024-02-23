import styled from "styled-components";

export const ServicesContainerStyled = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--yellow);
`

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
        color: var(--blue);
    }
    p {
        color: var(--blue);
    }
    p span{
        font-weight: 600;
        color: var(--blue);
    }
`