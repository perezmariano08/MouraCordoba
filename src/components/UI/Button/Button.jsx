import React from 'react'
import { ButtonContainerStyled } from './ButtonStyles'

const Button = ({
        children, 
        background = "yellow",
        color = 'blue',
        href,
        target,
    }) => {
    return (
        <ButtonContainerStyled
            background={background}
            color={color}
            href={href}
            target={target}
        >
            {children}
        </ButtonContainerStyled>

    )
}

export default Button