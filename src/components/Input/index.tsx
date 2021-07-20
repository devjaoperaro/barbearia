import react, {InputHTMLAttributes, useState, useRef, useCallback, useEffect} from 'react';
import {IconBaseProps} from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import {Container, Error} from './styles'; 
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    
    //faz parte do unForm, para pegar os registros
    const { fieldName, defaultValue, error, registerField} = useField(name);

    // Assim q o componente for exibido em tela, chama-se a função registerFields registrando os campos 
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        if(inputRef.current?.value){
            setIsFilled(true);
        }else{
            setIsFilled(false);
        }
    }, []);

    return (
        <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused} >
            {/* para utilizar a propriedade size do icone basta importar o IconBaseProps */}
            {Icon && <Icon size={20} color="#4f4c57" />}
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}
                {...rest}
            />
            {error && (
                //tooltip: é um tooltip só q de erro
                <Error title={error}>
                    {/* children */}
                    <FiAlertCircle color="#c53030" size={20}/>
                </Error>
            )}
        </Container>
    );
}


export default Input;