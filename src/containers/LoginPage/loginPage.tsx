import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/loginForm'
import TextComponent from '../../components/Common/Text/textComponent'
import BoxComponent from '../../components/Common/Box/boxComponent'

import * as Service from './utils/login.service'
import * as TokenService from './utils/token.service'

const theme = createTheme()

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const login = await Service.handeLogin(
      data.get('email'),
      data.get('password'),
    )
    // console.log(login)
    if (login) {
      TokenService.setToken(login.data)
      navigate('/dashboard')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <TextComponent
        component="h1"
        variant="h5"
        align="center"
        marginTop={20}
        noWrap
      >
        Scaled Data Science - Projects Repository
      </TextComponent>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BoxComponent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LoginForm handleSubmit={handleSubmit} />
        </BoxComponent>
      </Container>
    </ThemeProvider>
  )
}
