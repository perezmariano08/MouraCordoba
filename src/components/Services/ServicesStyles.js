import styled from "styled-components";

export const ServicesContainerStyled = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--blue);
`

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
        color: var(--white);
    }
    p span{
        font-weight: 600;
    }
`