import React, { useState, useEffect } from 'react'
import { Button, Grid, Box } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid'
import NavBar from '../../components/NavBar/navBar'

//styles
import { useStyles } from './styles/customerListStyle'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ButtonComponent from '../../components/Common/Button/buttonComponent'

//utils
import * as ProjectService from './utils/project.service'

function Tree() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const [ID, setID] = useState('')
  const [phase, setPhase] = useState('')
  const [activity, setActivity] = useState('')
  const [task, setTask] = useState('')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  interface p {
    ID: number
    phase: number
    activity: string
    task: string
    input: string
    output: string
  }

  let projectData: p[] = []
  const [customers, setCustomers] = useState(projectData)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'phase',
      headerName: 'Phase',
      width: 200,
    },
    {
      field: 'activity',
      headerName: 'Activity',
      width: 200,
    },
    {
      field: 'task',
      headerName: 'Task',
      width: 250,
    },
    {
      field: 'input',
      headerName: 'Input',
      width: 200,
    },
    {
      field: 'output',
      headerName: 'Output',
      width: 250,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,

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

  //loads the data
  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    GetProjectPhases()
  }

  const GetProjectPhases = async () => {
    let project = await ProjectService.getProjectDetails()
    projectData = project?.data
    setCustomers(projectData)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async (clickedUser: any) => {
    // console.log(clickedUser.id)
    const r = window.confirm('Do you want to delete a project step')
    if (r === true) {
      await ProjectService.deleteProjectStep(clickedUser.id)
      GetData()
    } else if (r === false) {
      alert('OK')
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const response = await ProjectService.addPhase(
      ID,
      phase,
      activity,
      task,
      input,
      output,
    )
    // console.log(response?.data)

    GetData()
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
            ADD PROJECT STEPS
          </Button>

          <Dialog
            disableBackdropClick
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add New Item</DialogTitle>
            <form noValidate onSubmit={handleSubmit}>
              <DialogContent>
                <TextField
                  value={ID}
                  onChange={(event) => setID(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="id"
                  label="ID"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={phase}
                  onChange={(event) => setPhase(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="phase"
                  label="Phase"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={activity}
                  onChange={(event) => setActivity(event.target.value)}
                  margin="dense"
                  id="activity"
                  label="Activity"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                  margin="dense"
                  id="task"
                  label="Task"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="input"
                  label="Input"
                  type="text"
                  fullWidth
                />
                <TextField
                  value={output}
                  onChange={(event) => setOutput(event.target.value)}
                  autoFocus
                  margin="dense"
                  id="output"
                  label="Output"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <ButtonComponent onClick={handleClose} color="primary">
                  Cancel
                </ButtonComponent>
                <ButtonComponent
                  onClick={handleClose}
                  color="primary"
                  type="submit"
                >
                  Add
                </ButtonComponent>
              </DialogActions>
            </form>
          </Dialog>
        </Grid>

        <Box sx={{ m: 3, width: 1450, height: 450 }}>
          <DataGrid
            editMode="row"
            rows={customers}
            columns={columns}
            pageSize={12}
            checkboxSelection={false}
            disableSelectionOnClick={false}
            rowHeight={25}
          />
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Tree
