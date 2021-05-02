import { connect } from 'react-redux'
import { useSession } from './hooks/useSession'
import { setTokens, setUserAttributes } from './redux/slices/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/shared/ProtectedRoute'
import Home from './components/Home'
import Login from './routes/Login'
import ForgotPassword from './routes/ForgotPassword'
import ResetPassword from './routes/ResetPassword'
import Dashboard from './routes/Dashboard'
import ChangePassword from './components/ChangePassword'
import Admin from './components/Admin'

const App = ({
  auth,
  setTokens,
  setUserAttributes
}) => {
  useSession(setTokens, setUserAttributes)

  return (
    <>
      <GlobalStyles />
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
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <ProtectedRoute auth={auth} path="/dashboard" component={Dashboard} />
          <ProtectedRoute auth={auth} path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  )
}

export default connect(
  state => ({
    auth: state.auth
  }),
  { setTokens, setUserAttributes }
)(App);