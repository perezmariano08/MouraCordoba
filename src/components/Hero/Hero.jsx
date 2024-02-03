import React from 'react'
import { HeroButtons, HeroContainerStyled, HeroText, HeroWrapper } from './HeroStyles'
import Button from '../UI/Button/Button'
import BateriaMoura from '/bateriaMoura.webp'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroWrapper>
                <img src={BateriaMoura}/>
                <HeroText>
                    <h1>La bateria que tu vehiculo necesita con instalación inmediata</h1>
                    <p>Baterías de alta calidad, durabilidad y rendimiento excepcional. No dejes que tu viaje se vea interrumpido. Para mantener tu vehiculo en movimiento, elegí <span>Moura</span>.</p>
                    <HeroButtons>
                        <Button background='green' color='white'>
                            <FaWhatsapp/>
                            ¡WhatsApp!
                        </Button>
                        <Button background='blue' color='white'>
                            <FaPhone/>
                            ¡Llamanos!
                        </Button>
                    </HeroButtons>
                </HeroText>
            </HeroWrapper>          
        </HeroContainerStyled>
    )
}

export default Hero