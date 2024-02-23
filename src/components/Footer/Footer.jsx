import React from 'react'
import { FooterBrand, FooterContact, FooterContactItem, FooterContainerStyled, FooterCopyright, FooterDivider, FooterHeadWrapper, FooterWrapper } from './FooterStyles'
import logoMoura from '/moura_.webp'
import { FaEnvelope, FaPhone, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterWrapper>
                <FooterHeadWrapper>
                    <FooterBrand>
                        <img src={logoMoura} alt="" srcset="" />
                        <p>Un grupo que lleva más de 30 años creciendo como referente en energia.</p>
                    </FooterBrand>
                    <FooterContact>
                        <span>Contacto</span>
                        <FooterContactItem>
                            <FaWhatsapp />
                            3517894561
                        </FooterContactItem>
                        <FooterContactItem>
                            <FaRegEnvelope />
                            ventas@mouracordoba.com
                        </FooterContactItem>
                        <FooterContactItem>
                            <FaPhone />
                            3517894561
                        </FooterContactItem>
                    </FooterContact>
                </FooterHeadWrapper>
                <FooterDivider/>
                <FooterCopyright>
                    <p>Moura Córdoba | Todos los derechos reservados © 2024 | Desarrollado por <span>Codepyx</span>.</p>
                </FooterCopyright>
            </FooterWrapper>
        </FooterContainerStyled>
    )
}

export default Footer