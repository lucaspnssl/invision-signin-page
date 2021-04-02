import styled, { css } from "styled-components";

interface ContentProps {
  IsErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 1.1rem;
  }

  > p {
    font-size: var(--size-body);
    color: var(--gray-700);
    text-align: left;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;

  padding: 0.68rem 1.25rem;

  border-bottom: 1px solid var(--gray-700);

  ${(props) =>
    props.IsErrored &&
    css`
      border-bottom: 1px solid var(--red-300);
    `}

  input {
    background: transparent;
    color: var(--black);
    flex: 1;
    border: 0;
    font-size: 1rem;
    outline: none;

    ${(props) =>
    props.IsErrored &&
    css`
      color: var(--red-300);
    `}    

    &::placeholder {
      color: var(--gray-700);
      opacity: 0.6;
    }
  }
`;

export const Error = styled.div`
    color: var(--red-300);
    font-size: var(--size-body);
    margin-top: 0.5rem;
    opacity: 0.6;
`;
