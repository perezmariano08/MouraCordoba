import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    position: sticky;
    top: 0;
    z-index: 99;
    height: 80px;
    background-color: var(--blue);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #254CAF;
    @media screen and (max-width: 780px) {
        padding: 0;
    }
`

export const NavbarWrapper = styled.section`
    height: 100%;
    align-items: center;
    justify-content: space-between;
`

export const NavbarLogo = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    img {
        height: 40%;
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;

    li {
        font-size: 16px;
        color: var(--white);
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

    li:hover {
        color: var(--yellow);
    }
    @media screen and (max-width: 780px) {
        display: none;
    }
`

export const NavbarAction = styled.div`
    display: flex;
`