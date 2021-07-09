import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 56px;

    display: flex;

    button {
        flex: 1;
        border: 0; 
        background: #FF9000;
        border-radius: 10px;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#FF9000')};
        }
    }
`;