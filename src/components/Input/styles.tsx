import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 1px solid #232129;
    padding: 15px;
    width: 100%;
    color: #f4ede8;

    display: flex;

    /* div do input */
    & + div {
        margin-top: 8px;
    }

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
