import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt='logo-gobarber' />

            <form>

                <h1>Faça seu logon</h1>

                <input placeholder='E-mail' />
                <input type='password' placeholder='Senha' />

                <button type='submit'>Entrar</button>

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