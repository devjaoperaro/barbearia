import React, {useEffect} from 'react';
import { ToastMessage, useToast } from '../../../context/ToastContext';

import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { Container } from './styles';
import { type } from 'os';

interface ToastProps {
    message: ToastMessage;
    style: object; 
}

const icons = {
    info: <FiInfo size={20}/>,
    sucess: <FiCheckCircle size={20}/>,
    error: <FiAlertCircle size={20}/>
};

// Como esse componente de Toast é criado um novo toda vez q um toast surge lá no ToastContext
// entao o jeito mais facil para fazer um timer para sumir o toast é criando um useEfect nesse componente 

const Toast: React.FC<ToastProps> = ({ message, style }) => {

    const {removeToast} = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000)

        // se nao executar o remove toast
        return () => {
           clearTimeout(timer);
        }
    }, [removeToast, message.id])

    return (
        <Container 
            type={message.type} 
            hasDescription={!!message.description}
            style={style}
        >
            {icons[message.type || 'info']}
            
            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type='button'>
                <FiXCircle size={18}/>
            </button>

        </Container>
    );
};

export default Toast;