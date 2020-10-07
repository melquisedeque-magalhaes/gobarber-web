import styled,{ css } from 'styled-components'

interface ContainerProps{
    isFocused: Boolean;
    isFilled: Boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #232129;
    color: #666360;

    ${props => props.isFocused && 
        css`
            color: #FF9000;
            border-color: #FF9000;
        `
    }

    ${ props => props.isFilled && 
        css`
            color: #FF9000;
        `
    }

    input {
        flex: 1;
        color: #F4EDE8;
        background: #232129;
        border: 0;

        &::placeholder {
            color: #666360;
        }

        & + input {
            margin-top: 8px;
        }
    }

    svg {
        margin-right: 16px;
    }

    & + div {
        margin-top: 8px;
    }
`