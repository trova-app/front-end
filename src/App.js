import { useEffect } from 'react'
import { connect } from 'react-redux'
import Signup from './components/Signup'
import Login from './components/Login'
import ChangePassword from './components/ChangePassword'
import ChangeEmail from './components/ChangeEmail'
import VerifyEmail from './components/VerifyEmail'
import { setTokens, setUserAttributes } from './redux/slices/auth'
import { setView } from './redux/slices/view'
import { logout } from './auth/logout'
import { getSession } from './auth/getSession'

function App({ auth, view, setView, setTokens, setUserAttributes }) {

  useEffect(() => {
    getSession()
      .then(({ session, attributes }) => {
        setUserAttributes(attributes)
        setTokens({
          accessToken: {
            jwtToken: session.accessToken.jwtToken,
            payload: session.accessToken.payload
          },
          idToken: {
            jwtToken: session.idToken.jwtToken,
            payload: session.idToken.payload
          },
          refreshToken: {
            token: session.refreshToken.token
          }
        })
      })
  }, [setTokens, setUserAttributes])

  return (
    <div>
      <Signup />
      <Login />
      {view === "dashboard" &&
        <>
          <button onClick={() => {
            logout()
            setTokens(null)
            setUserAttributes(null)
            setView("")
          }}>
            Log me out
            </button>
          <ChangePassword />
          <ChangeEmail />
          <p>{JSON.stringify(auth.userAttributes)}</p>
        </>
      }
      { view === "verifyEmail" && <>
        <VerifyEmail />
      </>
      }
    </div>
  );
}

export default connect(
  state => ({
    auth: state.auth,
    view: state.view.current
  }),
  { setTokens, setUserAttributes, setView }
)(App);