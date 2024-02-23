import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--gray);
`

export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1260px;
    padding: 0 30px;
    img {
        width: 199px;
    }

    
`

export const FooterHeadWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`

export const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    p {
        color: var(--text);
        width: 40%;
    }

    @media (max-width: 968px) {
        p {
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        p {
            width: 100%;
        }
    }
`

export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    span {
        font-size: 20px;
        font-weight: 600;
        color: var(--text);
    }
`

export const FooterContactItem = styled.a`
    display: flex;
    gap: 5px;
    font-size: 16px;
    align-items: center;
    color: var(--blue-light);
`

export const FooterDivider = styled.div`
    width: 100%;
    border-top: 1px solid var(--text);
`

export const FooterCopyright = styled.div`
    display: flex;
    padding: 30px 0;
    p {
        color: var(--text);
    }

    span {
        color: var(--blue-light);
    }
`