import { connect } from 'react-redux'
import { useSession } from './hooks/useSession'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { setTokens, setUserAttributes } from './redux/slices/auth'

import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/shared/ProtectedRoute'
import Home from './components/Home'
import Login from './routes/Login'
import ForgotPassword from './routes/ForgotPassword'
import ResetPassword from './routes/ResetPassword'
import Dashboard from './routes/Dashboard'
import RequestAccess from './routes/RequestAccess'
import ChangePassword from './components/ChangePassword'
import Admin from './components/Admin'

const App = ({
  auth,
  setTokens,
  setUserAttributes
}) => {
  useSession(setTokens, setUserAttributes)

  return (
    <HelmetProvider>
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
          <Route path="/request-access">
            <RequestAccess />
          </Route>
          <ProtectedRoute auth={auth} path="/dashboard" component={Dashboard} />
          <ProtectedRoute auth={auth} path="/admin" component={Admin} />
        </Switch>
      </Router>
    </HelmetProvider>
  )
}

export default connect(
  state => ({
    auth: state.auth
  }),
  { setTokens, setUserAttributes }
)(App);