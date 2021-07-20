import react, {useCallback, useRef} from 'react';
import {Link} from 'react-router-dom';
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
import curriedTint from 'polished/lib/color/tint';


const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleLoginSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                senha: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, { 
                abortEarly: false
            });

            console.log(data);
        } catch (error) {
            const errors = getValidationErrors(error)

            formRef.current?.setErrors(errors)
        }
    }, []);

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
                        name='senha' 
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