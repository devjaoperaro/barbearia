import react, {useCallback, useRef, useContext} from 'react';
import { Container, Content, AnimationContainer, Background } from './styles';
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
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Link } from 'react-router-dom';

interface SignInformData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    // para utilizar um context, usa-se a funcao do arquivo authcontext q utiliza o hook useContext
    const { signIn } = useAuth();
    const { addToast } = useToast();

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

            // valores q vao para o contexto
            await signIn({
                email: data.email,
                password: data.password
            });
            
        } catch (error) {
            if (error instanceof Yup.ValidationError){
                const errors = getValidationErrors(error)
    
                formRef.current?.setErrors(errors)

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro',
                description: 'Ocorreu um erro ao tentar fazer o login, cheque as credenciais.'
            });
        }
    }, [signIn, addToast]);

    return (
        <Container>
            <Content>
                <img src={Logo} alt="logo" />
                <AnimationContainer>
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

                    <Link to='/signup'>
                        <FiLogIn/>
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background/>
        </Container>

    );
}


export default Signin;