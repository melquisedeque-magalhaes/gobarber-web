import React from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi' 

import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
    <Container>

        <Background />

        <Content>
            <img src={LogoImg} alt='logo-gobarber' />

            <form>

                <h1>Crie sua conta</h1>

                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} placeholder="Senha" />

                <Button type="submit">Cadastrar</Button>
            </form>

            <a>
                <FiArrowLeft size={20} color="#F4EDE8"/>
                Voltar para login
            </a>
        </Content>
        
        
    </Container>
)

export default SignUp;