import React from 'react'
import { HeroButtons, HeroContainerStyled, HeroImageBackground, HeroText, HeroWrapper } from './HeroStyles'
import Button from '../UI/Button/Button'
import BateriaMoura from '/bg-autos-livianos.png'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { LuPhoneForwarded } from 'react-icons/lu'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroImageBackground/> 
            <HeroWrapper className='wrapper'>
                <HeroText>
                    <h1>La batería que tu vehículo necesita con <span>instalación inmediata</span></h1>
                    <p>Baterías de alta calidad, durabilidad y rendimiento excepcional. No dejes que tu viaje se vea interrumpido. Para mantener tu vehiculo en movimiento, elegí <span>Moura</span>.</p>
                    <HeroButtons>
                        <Button background='yellow' color='blue' target="_blank" href="https://walink.co/4c9274" >
                            <FaWhatsapp/>
                            ¡WhatsApp!
                        </Button>
                        <Button border={"yellow"} background='transparent' color='yellow' target="_blank" href="tel:3516363001">
                        <LuPhoneForwarded />
                        ¡LLAMANOS!
                    </Button>
                    </HeroButtons>
                </HeroText>
                <img src={BateriaMoura}/>
            </HeroWrapper>
        </HeroContainerStyled>
    )
}

export default Hero