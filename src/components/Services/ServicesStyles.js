import styled from "styled-components";

export const ServicesContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    padding: 0 20px;
`

export const ServicesWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
        color: var(--white);
    }
    p span{
        font-weight: 600;
    }
`