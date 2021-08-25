// como o Toast vai ser utilizado em toda a aplicação, criamos um contexto

import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';


export interface ToastMessage {
    id: string;
    type?: 'sucess' | 'error' | 'info';
    title: string;
    description?: string;
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

// criando o contexto
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({children}) => {

    // criar um state para alojar um ou mais toast na tela
    const [ messages, setMessages ] = useState<ToastMessage[]>([]);


    // esse Omit, tem como função omitir alguma propriedade, pego todas do toastmessage menos o id
    const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
        const id = uuid();

        // criando um Toast
        const toast = {
            id,
            type,
            title,
            description
        }

        // jogando no array com os demais
        setMessages([...messages, toast]);

    }, [messages]);

    const removeToast = useCallback((id: string) => {
        // oldState: sao informações antigas dentro do array
        setMessages(oldState => oldState.filter(message => message.id != id));
        
    }, [])

    return (
        <ToastContext.Provider value={{addToast, removeToast}}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    )
}

// usando o contexto
function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if(!context){
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };