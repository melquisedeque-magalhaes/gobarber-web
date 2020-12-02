import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat center;
  background-size: cover;
`;
