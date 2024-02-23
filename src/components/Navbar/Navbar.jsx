import React from 'react'
import { NavbarAction, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarWrapper } from './NavbarStyles'
import LogoMoura from '/LogoMouraArgentina.png'
import Button from '../UI/Button/Button'
import { LuPhoneForwarded } from "react-icons/lu";

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWrapper className='wrapper'>
                <NavbarLogo href="https://mouracordoba.com">
                    <img src={LogoMoura} alt="Logo Moura"/>
                </NavbarLogo>
                <NavbarAction>
                    <Button border={"yellow"} background='transparent' color='yellow' target="_blank" href="tel:3516363001">
                        <LuPhoneForwarded />
                        COMUNICARSE CON UN REPRESENTANTE
                    </Button>
                </NavbarAction>
            </NavbarWrapper>
        </NavbarContainerStyled>
    )
}

export default Navbar