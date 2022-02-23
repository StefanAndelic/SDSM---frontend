import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import green from '@material-ui/core/colors/green'
import { useNavigate } from 'react-router-dom'
import NavLinkComponent from '../Common/NavLink/navLink'
import IconComponent from '../Common/Icon/iconComponent'
import AppBarComponent from '../AppBar/appBarComponent'
import { Box } from '@mui/material'

//utils
import * as TokenService from '../../containers/LoginPage/utils/token.service'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500],
  },
  customHeight: {
    minHeight: 200,
  },
  offset: theme.mixins.toolbar,
}))

export default function NavBar() {
  const classes = useStyles()
  const navigate = useNavigate()

  let token: string

  useEffect(() => {
    handleAuthorization()
  })

  const handleAuthorization = () => {
    const response = TokenService.getToken()
    const auth = TokenService.decodeToken(response)
    token = auth.role
    return token
  }
  token = handleAuthorization()

  const handleNavigateToDashboard = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    navigate('/dashboard')
    event.preventDefault()
  }

  const handleNavigateToProjects = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    navigate('/project')
    event.preventDefault()
  }

  //navigates to the team page
  const handleNavigateToTeam = (event: React.FormEvent<HTMLFormElement>) => {
    navigate('/team')
    event.preventDefault()
  }

  //deletes the toke from local storage
  const handleDeleteToken = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const r = window.confirm('Do you want to logout?')
    if (r === true) {
      TokenService.removeToken()
      navigate('/login')
    }
  }

  return (
    <React.Fragment>
      <AppBarComponent>
        <Toolbar>
          <Typography color="inherit" variant="h5" className={classes.title}>
            AI project
          </Typography>
          <Box sx={{ flexGrow: 90 }}>
            <NavLinkComponent
              color="inherit"
              onClick={handleNavigateToDashboard}
            >
              Dashboard
            </NavLinkComponent>
            {token === 'Project Manager' && (
              <React.Fragment>
                <NavLinkComponent
                  color="inherit"
                  onClick={handleNavigateToProjects}
                >
                  Project
                </NavLinkComponent>
                <NavLinkComponent
                  color="inherit"
                  onClick={handleNavigateToTeam}
                >
                  Team
                </NavLinkComponent>
              </React.Fragment>
            )}
          </Box>
          <IconButton>
            <IconComponent
              alt="Stefan"
              src="/static/images/avatar/2.jpg"
              onClick={handleDeleteToken}
            />
          </IconButton>
        </Toolbar>
      </AppBarComponent>
      <Toolbar />
    </React.Fragment>
  )
}
