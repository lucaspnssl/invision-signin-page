import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({ children, color, size, ...rest }) => {
    return (
        <Container color={color} size={size} {...rest}>
            {children}
        </Container>
    )
}