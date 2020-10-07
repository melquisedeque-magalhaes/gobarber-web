import React from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi' 
import { Form } from '@unform/web'

import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void{
        console.log(data)
    }

    return(
        <Container>

            <Background />

            <Content>
                <img src={LogoImg} alt='logo-gobarber' />

                <Form onSubmit={handleSubmit}>

                    <h1>Crie sua conta</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input 
                        name="password" 
                        icon={FiLock} 
                        placeholder="Senha" 
                        type="password" 
                    />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a>
                    <FiArrowLeft size={20} color="#F4EDE8"/>
                    Voltar para login
                </a>
            </Content>
        
        </Container>
    )
    
}

export default SignUp;