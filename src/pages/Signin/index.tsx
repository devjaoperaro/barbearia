import react from 'react';
import {Link} from 'react-router-dom';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

const Signin: React.FC = () => (
    <Container>
        <Content>
            <img src={Logo} alt="logo" />

            <form>
                <h1>Faça o seu logon</h1>

                <input placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>

                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href='login'>
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background/>
    </Container>
);

export default Signin;