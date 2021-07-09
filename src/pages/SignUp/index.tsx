import React from 'react';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'

import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content } from './styles';

const Signup: React.FC = () => (
    <Container>
        <Background/>
        <Content>
            <img src={Logo} alt="logo" />

            <div>
                <a id='cliente' href="cliente">Sou cliente</a>
                <a href="barbeiro">Sou Barbeiro</a>
            </div>

            <form autoComplete="off">
                <Input name='nome' icon={FiUser} placeholder='Nome'></Input>
                <Input name='email' icon={FiMail} placeholder='E-mail'></Input>
                <Input name='senha' type='password' icon={FiLock} placeholder='Nome'></Input>

                <Button type='submit'>Cadastrar</Button>
            </form>

            <a href="/">
                <FiArrowLeft size={20}/>
                Voltar para logon
            </a>
        </Content>
    </Container>
)

export default Signup;