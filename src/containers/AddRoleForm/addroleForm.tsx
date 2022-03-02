import React, { useState, useEffect } from 'react'

//components
import { Button, Grid, Box } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid'
import NavBar from '../../components/NavBar/navBar'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import ButtonComponent from '../../components/Common/Button/buttonComponent'
import DialogueTitleComponent from '../../components/Common/DialogTitle/dialogueTitle'
import DialogComponent from '../../components/Common/Dialog/dialogComponent'

//utils
import * as Service from './utils/addRoleForm.service'

//styles
import { useStyles } from './style/customerListStyle'
import { Alert } from '@mui/material'

function AddRoleForm() {
  const classes = useStyles()

  interface p {
    _ID: number
    memberID: number
    name: string
    role: string
    email: string
    password: string
  }
  let memberData: p[] = []
  const [members, setMembers] = useState(memberData)

  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    GetTeamMembers()
  }

  const GetTeamMembers = async () => {
    let team = await Service.getTeamMembers()
    memberData = team?.data

    setMembers(memberData)
  }

  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [memberID, setMemberID] = useState('')
  const [password, setPassword] = useState('')

  // initial data
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,

      renderCell: (id: any) => (
        <>
          <ButtonComponent
            style={{
              backgroundColor: '#e8605d',
              padding: '3px 35px',
            }}
            onClick={() => handleDelete(id)}
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              '&:hover': {
                color: 'black',
              },
            }}
          >
            Delete
          </ButtonComponent>
        </>
      ),
    },
  ]

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCancell = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async (clickedUser: any) => {
    const r = window.confirm('Do you want to delete a member')
    if (r === true) {
      await Service.deleteMember(clickedUser.id)
      GetTeamMembers()
    } else if (r === false) {
      alert('OK')
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await Service.addMember(memberID, role, name, email, password)

    GetTeamMembers()
  }

  return (
    <React.Fragment>
      <NavBar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.listHeader}
      >
        <Grid item md={8}></Grid>

        <Grid item md={4}>
          <Button
            className={classes.btn}
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            type="submit"
          >
            ADD NEW TEAM MEMBER
          </Button>

          <DialogComponent
            disableBackdropClick
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogueTitleComponent id="form-dialog-title">
              Add New Team Member
            </DialogueTitleComponent>

            <form noValidate onSubmit={handleSubmit}>
              <DialogContent>
                <TextField
                  value={memberID}
                  onChange={(event) => setMemberID(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="ID"
                  label="ID"
                  type="number"
                  fullWidth
                />
                <TextField
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                />

                <TextField
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  margin="dense"
                  id="role"
                  label="Role"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCancell} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary" type="submit">
                  Add
                </Button>
              </DialogActions>
            </form>
          </DialogComponent>
        </Grid>

        <Grid item>
          <Box sx={{ m: 5, width: 950, height: 400 }}>
            <DataGrid
              editMode="row"
              rows={members}
              columns={columns}
              pageSize={5}
              checkboxSelection={false}
              disableSelectionOnClick={false}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AddRoleForm
