import ChildHeader from '../childHeader/childHeader'
import ChildBody from '../childBody/childBody'
import { Phase } from '../models/model'

const ProjectChild = (phase: Phase) => {
  return (
    <div className="child-main">
      <ChildHeader {...phase} />
      <ChildBody {...phase} />
    </div>
  )
}

export default ProjectChild
