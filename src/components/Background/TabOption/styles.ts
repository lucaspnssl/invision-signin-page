import styled, { css } from "styled-components";

interface ContainerProps  {
  isSelected?: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 0.687rem;
  width: 0.687rem;
  opacity: 0.5;
  border-radius: 0.35rem;
  background: var(--white);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  & + & {
    margin-left: 0.8rem;
  }

  ${(props) =>
    (props.isSelected &&
      css`
        width: 1.625rem;
        opacity: 1;
      `) ||
    css`
      &:hover {
        filter: brightness(0.9);
      }
    `}
`;
