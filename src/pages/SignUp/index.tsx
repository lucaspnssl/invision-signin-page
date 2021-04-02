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
    SignUpForm,
    Title,
    UserInfos,
    SplitActionsLine,
    Warnings
} from './styles';
import { Logo } from '../../components/Logo';

export const SignUp: React.FC = () => {
    const [emailInputError, setEmailInputError] = useState<string>();
    const [nameInputError, setNameInputError] = useState<string>();
    const [passwordInputError, setPasswordInputError] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailInputError('');
        setPasswordInputError('');
        setNameInputError('');

        const data = {
            name,
            email,
            password
        }

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Este campo não pode ser vazio'),
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
                    if (error.path as string === 'name') setNameInputError(error.message);
                });
            }
        }
    }, [email, name, password]);

    return (
        <Container>
            <Background />
            <Content>
                <Logo />
                <SignUpForm onSubmit={(e) => handleSubmit(e)}>
                    <Title>Getting Started</Title>
                    <UserInfos>
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            label="Full Name"
                            placeholder="You name"
                            error={nameInputError}
                        />
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

                    <Button
                        color='primary'
                        size='md'
                        type='submit'
                    >
                        Sign up
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
                    <Warnings>
                        <div>
                            By signing up, you agree to <strong>Invision</strong>
                        </div>
                        <section>
                            <Link to="/signup">Terms of Conditions</Link> and <Link to="/signup">Privacy Policy</Link>
                        </section>
                        <div>
                            Already on <strong>Invision</strong>? <Link to="/">Log in</Link>
                        </div>
                    </Warnings>
                </SignUpForm>
            </Content>
        </Container >
    );
}