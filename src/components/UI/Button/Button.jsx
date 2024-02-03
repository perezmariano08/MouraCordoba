import React from 'react'
import { ButtonContainerStyled } from './ButtonStyles'

const Button = ({
        children, 
        background = "yellow",
        color = 'blue'
    }) => {
    return (
        <ButtonContainerStyled
            background={background}
            color={color}
            whileTap={{scale: .95}}
        >
            {children}
        </ButtonContainerStyled>
    )
}

export default Button