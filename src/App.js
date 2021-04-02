import { useEffect } from 'react'
import { connect } from 'react-redux'
// import Signup from './components/Signup'
import Login from './components/Login'
import ChangePassword from './components/ChangePassword'
import { setTokens, setUserAttributes } from './redux/slices/auth'
import { logout } from './auth/logout'
import { getSession } from './auth/getSession'

const App = ({
  auth,
  setTokens,
  setUserAttributes
}) => {

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

  if (auth.tokens) {
    return (
      <>
        <button onClick={() => {
          logout()
          setTokens(null)
          setUserAttributes(null)
        }}>
          Log me out
        </button>
        <ChangePassword />
        <p>{JSON.stringify(auth.userAttributes)}</p>
      </>
    )
  }

  return (
    <div>
      {/* <Signup /> */}
      <Login />
    </div>
  )
}

export default connect(
  state => ({
    auth: state.auth
  }),
  { setTokens, setUserAttributes }
)(App);