import './App.css'
import AllRoutes from './components/Routes/allRoutes'
import { action, observable, makeObservable } from 'mobx'
import './App.css'
import data from './data'
import { Phase, TeamMembers } from './components/Dashboard/models/model'
import React from 'react'

const appState = observable({
  project: data,
  changeTeamMember: action(
    'Mutating the Steps',
    (role: TeamMembers | 'All') => {
      const newState = data.map((phase) => {
        const steps = phase.steps.filter((step) =>
          step.teamMembers.includes(role),
        )
        return { ...phase, steps }
      })

      appState.project = newState
    },
  ),
})

export class ProjectStore {
  project: Phase[]

  constructor() {
    makeObservable(this, {
      project: observable,
      changeTeamMember: action,
    })
    this.project = data
  }

  changeTeamMember = (role: TeamMembers | 'All') => {
    if (role === 'All') {
      this.project = data
    } else {
      this.project = data.map((phase) => {
        const steps = phase.steps.filter((step) =>
          step.teamMembers.includes(role),
        )
        return { ...phase, steps }
      })
    }
  }
}

function App() {
  const projectStore = new ProjectStore()
  return (
    <React.Fragment>
      <div className="App">
        <AllRoutes />
      </div>
    </React.Fragment>
  )
}
export default App
