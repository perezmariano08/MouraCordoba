import React from 'react'
import { CardBateryWrapper } from './BatteriesStyles'

const CardBattery = ({children}) => {
    return (
        <CardBateryWrapper>
            {children}
        </CardBateryWrapper>
    )
}

export default CardBattery