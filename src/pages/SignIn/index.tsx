import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import GoogleIcon from '../../assets/google.svg';

import {
    Container,
    Content,
    SignInForm,
    Title,
    UserInfos,
    SplitActionsLine,
    ForgotPassword,
    CreateAccount
} from './styles';
import { Logo } from '../../components/Logo';

export const SingIn: React.FC = () => {
    const [emailInputError, setEmailInputError] = useState<string>();
    const [passwordInputError, setPasswordInputError] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailInputError('');
        setPasswordInputError('');

        const data = {
            email,
            password,
        }

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('Este campo não pode ser vazio')
                    .email('O e-mail está incorreto'),
                password: Yup.string()
                    .required('Este campo não pode ser vazio')
                    .min(6, 'A senha não pode ter menos de 6 caracteres'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    if (error.path as string === 'email') setEmailInputError(error.message);
                    if (error.path as string === 'password') setPasswordInputError(error.message);
                });
            }
        }
    }, [email, password]);

    return (
        <Container>
            <Background />
            <Content>
                <Logo />
                <SignInForm onSubmit={(e) => handleSubmit(e)}>
                    <Title>Welcome to Invision</Title>
                    <UserInfos>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            label="Users name or Email"
                            placeholder="You username or e-mail"
                            error={emailInputError}
                        />
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            label="Password"
                            placeholder="Your password"
                            name="password"
                            error={passwordInputError}
                        />
                    </UserInfos>
                    <ForgotPassword>
                        <Link to="/">Forgot password?</Link>
                    </ForgotPassword>

                    <Button
                        color='primary'
                        size='md'
                        type='submit'
                    >
                        Sign in
                    </Button>
                    <SplitActionsLine>
                        <hr />
                        <p>Or</p>
                        <hr />
                    </SplitActionsLine>
                    <Button color='secondary' size='lg'>
                        <img src={GoogleIcon} alt="Google" />
                        Sign in with Google
                    </Button>
                    <CreateAccount>
                        New <strong>Invision</strong>? <Link to="/signup">Create Account</Link>
                    </CreateAccount>
                </SignInForm>
            </Content>
        </Container>
    );
}