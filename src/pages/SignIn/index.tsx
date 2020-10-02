import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import Button from '../../components/Button'
import Input from '../../components/Input'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt='logo-gobarber' />

            <form>

                <h1>Faça seu logon</h1>

                <Input icon={FiMail} name="email" placeholder='E-mail' />
                <Input icon={FiLock} name="password" type='password' placeholder='Senha' />

                <Button type='submit'>Entrar</Button>

                <a href='forgout'>Esqueci minha senha</a>
            </form>

            <a href='register'>
                <FiLogIn size={16} />
                Criar conta
            </a>

        </Content>
        <Background />
    </Container>
)

export default SignIn;