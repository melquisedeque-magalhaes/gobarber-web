import React from 'react'

import LogoImg from '../../assets/logo.svg'
import { Container } from './styles'

const SignUp: React.FC = () => (
    <Container>
        <img src={LogoImg} alt='logo-gobarber' />
    </Container>
)

export default SignUp;