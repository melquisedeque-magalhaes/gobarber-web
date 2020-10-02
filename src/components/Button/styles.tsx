import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
    background: #FF9000;
    border-radius: 10px;
    padding: 0 16px;
    height: 56px;
    border: 0;
    width: 100%;
    margin-top: 16px;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#FF9000')};
    } 
`