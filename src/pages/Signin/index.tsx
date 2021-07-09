import react from 'react';
import {Link} from 'react-router-dom';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={Logo} alt="logo" />

            <form autoComplete="off">
                <h1>Faça o seu logon</h1>

                <Input name='email' icon={FiMail} placeholder='E-mail'></Input>
                <Input name='senha' icon={FiLock} type='password' placeholder='Senha'></Input>

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href='signup'>
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background/>
    </Container>
);

export default Signin;