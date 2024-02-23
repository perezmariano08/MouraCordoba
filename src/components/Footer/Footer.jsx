import React from 'react'
import { FooterBrand, FooterContact, FooterContactItem, FooterContainerStyled, FooterCopyright, FooterDivider, FooterHeadWrapper, FooterWrapper } from './FooterStyles'
import logoMoura from '/moura_.webp'
import { FaPhone, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

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
                        <FooterContactItem target='_blank' href='https://walink.co/4c9274'>
                            <FaWhatsapp />
                            Comunicate por WhatsApp
                        </FooterContactItem>
                        <FooterContactItem href='mailto:ventas@mouracordoba.com'>
                            <FaRegEnvelope />
                            ventas@mouracordoba.com
                        </FooterContactItem>
                        <FooterContactItem target='_blank' href='tel:3516363001'>
                            <FaPhone />
                            3516363001
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