import React from 'react'
import { ButtonContainerStyled } from './ButtonStyles'

const Button = ({
        children, 
        background = "yellow",
        color = 'blue',
        href,
        target,
        border,
    }) => {
    return (
        <ButtonContainerStyled
            background={background}
            color={color}
            href={href}
            target={target}
            border={border}
        >
            {children}
        </ButtonContainerStyled>

    )
}

export default Button