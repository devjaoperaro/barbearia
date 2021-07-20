import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface containerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<containerProps>`
    background: #232129;
    border-radius: 10px;
    border: 1px solid #232129;
    padding: 15px;
    width: 100%;
    color: #f4ede8;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    /* div do input */
    & + div {
        margin-top: 8px;
    }   

    //cor de erro no input
    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    //campo selecionado
    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    //campo preenchido
    ${props => props.isFilled && css`
        color: #ff9000;
    `}


    /* div do botao no caso */
    & + div {
        margin-bottom: 7px;
    }

    svg {
        margin-right: 25px;
    }

    input {
        background:#232129;
        flex: 1;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }

`;
