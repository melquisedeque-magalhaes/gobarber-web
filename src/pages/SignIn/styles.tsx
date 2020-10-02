import styled from 'styled-components'
import { shade } from 'polished'

import SignInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        
        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #F4EDE8;
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
        color: #FF9000;
        text-decoration: none;
        margin-top: 24px;
        transition: color 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: ${shade(0.2, '#FF9000')};
        }

        svg {
            margin-right: 16px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackgroundImg}) no-repeat center;
    background-size: cover;
`