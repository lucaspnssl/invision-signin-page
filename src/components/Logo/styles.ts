import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 5rem;
  right: 7.5rem;

  @media (max-device-width: 1024px) {
    top: 4rem;
    right: 4rem;
  }

  font-family: "Avenir", "Poppins", sans-serif;
  font-weight: var(--heavy);
  font-size: var(--size-logo);
`;