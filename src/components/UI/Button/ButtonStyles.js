import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonContainerStyled = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    font-size: 16px;
    background: ${({ background }) => `var(--${background})`};    
    color: ${({ color }) => `var(--${color})`};
    border: none;
    border-radius: 4px;
    font-weight: 400;
    padding: 6px 16px;
    height: fit-content;
    user-select: none;
`