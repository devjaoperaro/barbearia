import react, {useCallback, useRef, useContext} from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import  { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core'; 
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';
import AuthContext, { useAuth } from '../../context/AuthContext';

interface SignInformData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    // para utilizar um context, usa-se a funcao do arquivo authcontext q utiliza o hook useContext
    const { user, signIn } = useAuth()

    console.log(user);

    const handleLoginSubmit = useCallback(async (data: SignInformData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().required('Senha obrigatória'),  
            });

            await schema.validate(data, { 
                abortEarly: false
            });

            signIn({
                email: data.email,
                password: data.password
            });
        } catch (error) {
            const errors = getValidationErrors(error)

            formRef.current?.setErrors(errors)
        }
    }, [signIn]);

    return (
        <Container>
            <Content>
                <img src={Logo} alt="logo" />

                <Form autoComplete="off" ref={formRef} onSubmit={handleLoginSubmit}>
                    <h1>Faça o seu logon</h1>

                    <Input 
                        name='email' 
                        icon={FiMail} 
                        placeholder='E-mail'
                        >
                    </Input>

                    <Input 
                        name='password' 
                        icon={FiLock} 
                        type='password' 
                        placeholder='Senha'
                        >
                    </Input>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href='signup'>
                    <FiLogIn/>
                    Criar conta
                </a>
            </Content>
            <Background/>
        </Container>

    );
}


export default Signin;