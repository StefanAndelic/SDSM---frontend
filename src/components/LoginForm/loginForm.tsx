import Box from '@mui/material/Box'
import FormControlLabelComponent from '../FormControlLabel/formControlLabel'
import ButtonComponent from '../Common/Button/buttonComponent'
import TextField from '@mui/material/TextField'

function LoginForm({ handleSubmit }: any) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabelComponent />
      <ButtonComponent
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </ButtonComponent>
    </Box>
  )
}

export default LoginForm
