import React, {
    InputHTMLAttributes,
    useRef
} from 'react';

import { Container, Content, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            {label && <p>{label}</p>}
            <Content IsErrored={!!error}>
                <input
                    ref={inputRef}
                    {...rest}
                />
            </Content>
            {error && (
                <Error>{error}</Error>
            )}
        </Container>
    );
};