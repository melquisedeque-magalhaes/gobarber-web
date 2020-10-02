import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;

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