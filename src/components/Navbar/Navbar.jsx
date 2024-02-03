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
                <NavbarList>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Servicios</li>
                </NavbarList>
                <NavbarAction>
                    <Button>
                        <FaWhatsapp/>
                        ¡Llamanos!
                    </Button>
                </NavbarAction>
            </NavbarWrapper>
        </NavbarContainerStyled>
    )
}

export default Navbar