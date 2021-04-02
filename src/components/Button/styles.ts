import styled, { css } from "styled-components";
import { shade } from "polished";

interface ButtonProps {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Container = styled.button<ButtonProps>`
  height: 2.8rem;
  border-radius: 6.25rem;
  border: 0;
  outline: none;
  padding: 0 1.875rem;
  transition: background-color 200ms;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) =>
    ((color === "primary" || !color) &&
      css`
        background: var(--gray-700);
        color: var(--white);
        font-weight: bold;
        font-size: 1rem;

        &:hover {
          background: ${shade(0.2, "#707070")};
        }
      `) ||
    css`
      background: var(--white);
      color: var(--black);
      font-weight: normal;
      box-shadow: 0px 3px 6px #00000029;
      font-size: 1.1rem;

      &:hover {
        background: ${shade(0.2, "#FFFFFF")};
      }
    `}

  width: ${({ size }) => {
    if (size === "sm") return "8rem";
    else if (size === "md") return "11rem";
    else return "16.8rem";
  }};

  img { 
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 1.25rem;
  }
`;
