import React from 'react'
import { NavbarAction, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarWrapper } from './NavbarStyles'
import LogoMoura from '/LogoMouraArgentina.png'
import Button from '../UI/Button/Button'
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <NavbarLogo href="https://mouracordoba.com">
                    <img src={LogoMoura} alt="Logo Moura"/>
                </NavbarLogo>
                <NavbarAction>
                    <Button target={"_blank"} href="https://walink.co/4c9274">
                        <FaWhatsapp/>
                        3516363001
                    </Button>
                </NavbarAction>
            </NavbarWrapper>
        </NavbarContainerStyled>
    )
}

export default Navbar