import React from 'react'
import { BenefitItem, BenefitText, BenefitsContainerStyled, BenefitsWrapper } from './BenefitsStyles'
import { FaCreditCard, FaMobileScreen} from 'react-icons/fa6'
import { GiElectric } from "react-icons/gi";

const Benefits = () => {
    return (
        <BenefitsContainerStyled>
            <BenefitsWrapper>
                <BenefitItem>
                    <GiElectric className='benefit-icon'/>
                    <BenefitText>
                        <span className="benefit-title">Tu bateria en el día</span>
                        <span className="benefit-description">Seleccione el modelo de batería y el lugar de entrega.</span>
                    </BenefitText>
                </BenefitItem>
                <BenefitItem>
                    <FaCreditCard className='benefit-icon'/>
                    <BenefitText>
                        <span className="benefit-title">pagá como quieras</span>
                        <span className="benefit-description">Recibimos tarjetas de crédito, debito, transferencias y efectivo.</span>
                    </BenefitText>
                </BenefitItem>
                <BenefitItem>
                    <FaMobileScreen className='benefit-icon'/>
                    <BenefitText>
                        <span className="benefit-title">asesoramiento inmediato</span>
                        <span className="benefit-description">Contacto por teléfono, Whatsapp y Facebook Messenger.</span>
                    </BenefitText>
                </BenefitItem>
            </BenefitsWrapper>
        </BenefitsContainerStyled>
    )
}

export default Benefits