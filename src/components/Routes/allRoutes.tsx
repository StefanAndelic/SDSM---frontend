import { Route, Routes } from 'react-router-dom'

//routes
import NotFound from '../../containers/NotFoundPage/notFoundPage'
import LoginPage from '../../containers/LoginPage/loginPage'
import TeamPage from '../../containers/AddRoleForm/addroleForm'
import Dashboard from '../../containers/project/project'
import Tree from '../../containers/ProjectTree/tree'

//utils
import paths from '../../config/paths.json'
import { ProjectStore } from '../../App'
function AllRoutes() {
  const projectStore = new ProjectStore()
  return (
    <main className="container">
      <Routes>
        <Route path={paths.login} element={<LoginPage />} />
        {/* default route */}
        <Route path={paths.default} element={<LoginPage />} />
        {/* not found route */}
        <Route path={paths['not-found']} element={<NotFound />} />
        <Route path={paths.team} element={<TeamPage />} />
        <Route path={paths.project} element={<Tree />} />
        <Route
          path={paths.dashboard}
          element={<Dashboard store={projectStore} />}
        />
      </Routes>
    </main>
  )
}

export default AllRoutes
