// @ts-nocheck

import ProjectChild from '../../components/Dashboard/projectChild/projectChild'
import { observer } from 'mobx-react-lite'
import { ProjectStore } from '../App'
import RoleSelector from '../../components/Dashboard/RoleSelector/roleSelector'
import NavBar from '../../components/NavBar/navBar'
const ProjectComponent = ({ store }: { store: ProjectStore }) => {
  return (
    <>
      <NavBar />
      <div className="project-header">
        Project: CRISP-DM Outline
        <div style={{ paddingLeft: '10px' }}>
          <RoleSelector
            changeMemberFunction={store.changeTeamMember}
          ></RoleSelector>
        </div>
      </div>

      <div className="child-container">
        {store.project.map((phase, idx) => (
          <ProjectChild {...phase} key={idx} />
        ))}
      </div>
    </>
  )
}

export default observer(ProjectComponent)
