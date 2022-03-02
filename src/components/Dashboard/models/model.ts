export interface Phase {
  title: string
  status: 'complete' | 'incomplete' | 'inprogress'
  teamMembers: TeamMembers[]
  href?: any // todo use
  steps: Step[]
}

export interface Step {
  // these keys are from the Chrono api
  cardTitle: string
  cardDetailedText: string[]
  teamMembers: Array<TeamMembers | 'All'>
}

export type TeamMembers =
  | 'Project Manager'
  | 'Data Scientist'
  | 'Application Developer'
  | 'Test Specialist'
