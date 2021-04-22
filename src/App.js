import { connect } from 'react-redux'
// import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { useSession } from './hooks/useSession'
import { setTokens, setUserAttributes } from './redux/slices/auth'

const App = ({
  auth,
  setTokens,
  setUserAttributes
}) => {
  useSession(setTokens, setUserAttributes)

  if (auth.tokens) {
    return <Dashboard />
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <Signup /> */}
      <Login />
    </div>
  )
}

export default connect(
  state => ({
    auth: state.auth,
  }),
  { setTokens, setUserAttributes }
)(App);