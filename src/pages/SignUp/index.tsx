import React, { useRef, useCallback} from 'react';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
import * as Yup from 'yup';
import { Container, Background, Content, AnimationContainer } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../context/ToastContext';

interface SingUpFormData {
    name: string;
    email: string;
    password: string
}

const Signup: React.FC = () => {

    // utilizamos o unform para pegar os valores dos inputs com o Form
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();
    const history = useHistory();

    async function handleSubmit(data: SingUpFormData): Promise<void> {
        try {
            // setando nenhum erro
            formRef.current?.setErrors({});

            // utilizaremos o YUP para facilitar e ser mais rapido as validações   
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            })
    
            await schema.validate(data, { 
                abortEarly: false
            });

            await api.post('/users', data);

            history.push('/');

            addToast({
                type: 'sucess',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer o seu login!'
            });

        } catch (err) {
            if (err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err)
    
                formRef.current?.setErrors(errors)

                return;
            }
            
            addToast({
                type: 'error',
                title: 'Erro',
                description: 'Ocorreu um erro ao tentar fazer o logon, cheque as credenciais.'
            });
        }          
        
    }

    return (
        <Container>
            <Background/>
            <Content>
                <AnimationContainer>
                    <img src={Logo} alt="logo" />

                    <div>
                        <a id='cliente' href="cliente">Sou cliente</a>
                        <a href="barbeiro">Sou Barbeiro</a>
                    </div>
                    
                    <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                        <Input 
                            name='name'
                            icon={FiUser} 
                            placeholder='Nome'
                        />
                        <Input 
                            name='email' 
                            icon={FiMail} 
                            placeholder='E-mail'
                        />
                        <Input 
                            name="password" 
                            type='password' 
                            icon={FiLock} 
                            placeholder='Senha'
                        />

                        <Button type='submit'>Cadastrar</Button>
                        
                    </Form>

                    <Link to={"/"}>
                        <FiArrowLeft size={20}/>
                        Voltar para logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    )   
}


export default Signup;