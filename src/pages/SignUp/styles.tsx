import styled from 'styled-components';
import {shade} from 'polished';

import signupBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signupBackground}) no-repeat center;
    background-size: cover;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    max-width: 800px;

    > div {
        margin-top: 70px;
        display: flex;

        a {
            text-decoration: none;
            border-bottom: 1px solid #fff;
            padding-bottom: 6px;
            color: #f4ede8;
            transition: color 0.3s;

            & + a {
                margin-left: 50px ;
            }

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
        
    }

    form {
        margin: 50px 0 80px 8px;
        width: 370px;

        div {
            &:last-of-type {
                margin-top: 20px;
            }
        }
    }

    a {
        text-decoration: none;
        color: #f4ede8;
        display: flex;
        align-items: center;
        transition: color 0.3s;

        &:hover {
            color: ${shade(0.2, '#f4ede8')}
        }

        svg {
            margin-right: 16px;
        }
    }
    
`;
