import React, {FormEventHandler, useState, useRef, useCallback} from 'react';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content } from './styles';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

const Signup: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    async function handleSubmit(data: object): Promise<void> {
        try {
            // setando nenhum erro
            formRef.current?.setErrors({});

            // utilizaremos o YUP para facilitar e ser mais rapido as validações   
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                senha: Yup.string().min(6, 'No mínimo 6 dígitos'),
            })
    
            await schema.validate(data, { 
                abortEarly: false
            });
            console.log(data);
            
        } catch (err) {
            const errors = getValidationErrors(err);
            
            // mostrar os errors
            formRef.current?.setErrors(errors);
        }           	
    }

    return (
        <Container>
            <Background/>
            <Content>
                <img src={Logo} alt="logo" />

                <div>
                    <a id='cliente' href="cliente">Sou cliente</a>
                    <a href="barbeiro">Sou Barbeiro</a>
                </div>

                <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                    <Input 
                        name='nome'
                        icon={FiUser} 
                        placeholder='Nome'
                    />
                    <Input 
                        name='email' 
                        icon={FiMail} 
                        placeholder='E-mail'
                    />
                    <Input 
                        name="senha" 
                        type='password' 
                        icon={FiLock} 
                        placeholder='Senha'
                    />

                    <Button type='submit'>Cadastrar</Button>
                    
                </Form>

                <a href="/">
                    <FiArrowLeft size={20}/>
                    Voltar para logon
                </a>
            </Content>
        </Container>
    )   
}


export default Signup;