import React from 'react'
import { FooterContainerStyled, FooterWrapper } from './FooterStyles'
import logoMoura from '/LogoMouraArgentina.png'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterWrapper>
                <img src={logoMoura} alt="" srcset="" />
            </FooterWrapper>
        </FooterContainerStyled>
    )
}

export default Footer