import styled from 'styled-components';
import {shade} from 'polished';

import SigninBackground from '../../assets/sign-in-background.png'; 

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 800px;

    form {
        margin: 80px 0;
        display: flex;
        flex-direction: column;
        width: 340px;
        align-items: center;

        h1 {
            margin-bottom: 25px;
        }

        a {
            text-decoration: none;
            color: #f4ede8;
            margin-top: 24px;
            display: block;
            
            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }

    }

    > a {
        text-decoration: none;
        color: #FF9000;
        margin-top: 24px;
        display: block;
        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#FF9000')}
        }

        svg {
            margin-right: 16px;
        }
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${SigninBackground}) no-repeat center; 
    background-size: cover;
`;