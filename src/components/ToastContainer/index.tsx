import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from '../ToastContainer/styles';

import Toast from './Toast';
import { ToastMessage } from '../../context/ToastContext';

interface ToastContainerProps{
    messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {

    // primeiro parametro é o meu array dos toast, segundo é a função q recebe cada uma 
    // das minhas mensagens
    // e por fim um objeto q contem as informações da animação do React spring
    const messagesWithTransitions = useTransition(
        messages,
        (message) => message.id,
        {
            from: { right: '-120%' },
            enter: { right: '0%'},
            leave: { right: '-120%' }
        },
    );
    return (
        <Container>
            {messagesWithTransitions.map(({item, key, props}) => (
                <Toast 
                    key={key} 
                    message={item}
                    style={props}
                />
            ))}
        </Container>
    );
}

export default ToastContainer;
