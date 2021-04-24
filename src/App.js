import { connect } from 'react-redux'
// import Signup from './components/Signup'
import { useSession } from './hooks/useSession'
import { setTokens, setUserAttributes } from './redux/slices/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ChangePassword from './components/ChangePassword'
import Admin from './components/Admin'

const App = ({
  auth,
  setTokens,
  setUserAttributes
}) => {
  useSession(setTokens, setUserAttributes)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/change-password">
          <ChangePassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router >
  )
}

export default connect(
  state => ({
    auth: state.auth,
  }),
  { setTokens, setUserAttributes }
)(App);