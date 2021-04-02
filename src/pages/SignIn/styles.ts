import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 50%;

  @media (max-device-width: 1024px) {
    max-width: 100%;
  }

  position: relative;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  },
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  width: 27.3rem;

  @media (max-device-width: 1024px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: var(--size-title);
  color: var(--gray-700);
  font-family: "Muli", sans-serif;
  font-weight: var(--regular);
  margin-bottom: 5.5rem;
`;

export const UserInfos = styled.div`
  width: 100%;
  margin-bottom: 1.1rem;
`;

export const ForgotPassword = styled.div`
  align-self: flex-end;
  width: fit-content;

  margin-bottom: 1.875rem;

  a {
    font-size: var(--size-body);
    color: var(--gray-700);
    text-decoration: none;

    transition: opacity 200ms;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SplitActionsLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2.5rem 0;

  hr {
    height: rem(1.8px);
    width: 100%;
    background: var(--gray-700);
    opacity: 0.8;
    width: 100%;
  }

  > p {
    font-size: var(--size-body);
    font-weight: var(--regular);
    color: var(--gray-700);
    margin: 0 1.3rem;
    opacity: 0.8;
  }
`;

export const CreateAccount = styled.p`
  margin-top: 2.5rem;
  font-size: var(--size-body);
  color: var(--gray-700);

  > a {
    color: var(--gray-300);
    transition: opacity 200ms;

    &:hover {
      opacity: 0.7;
    }
  }
`;
