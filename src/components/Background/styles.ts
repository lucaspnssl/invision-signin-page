import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  @media (min-device-width: 1024px) {
    background: var(--green-300);
    flex: 1;
  }
  @media (max-device-width: 1024px) {
    display: none;
  }
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: var(--white);

  img {
    width: 44rem;
    height: 35rem;
    margin-bottom: 2rem;
    animation: ${appearFromRight} 1s ease-in-out;
  }
`;

export const ExplainTitle = styled.h1`
  font-size: var(--size-title);
  text-align: center;
  font-weight: var(--regular);

  margin-bottom: 1.25rem;
`;

export const ExplainDescription = styled.p`
  font-size: var(--size-description);
  text-align: center;
  width: 35rem;
  font-weight: var(--regular);

  margin-bottom: 2rem;
`;
