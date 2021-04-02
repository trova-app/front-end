import { useState } from 'react'
import { connect } from 'react-redux'

import { authenticate } from '../auth/authenticate'
import { setTokens, setUserAttributes } from '../redux/slices/auth'
import { setView } from '../redux/slices/view'

const SignupComponent = ({ setTokens, setUserAttributes, setView }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        authenticate(email, password)
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
                setView("dashboard")
            })
            .catch(err => {
                if (err.code === "UserNotConfirmedException") {
                    setView("verifyEmail")
                } else {
                    console.error("Login Error: ", err)
                }
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { setTokens, setUserAttributes, setView }
)(SignupComponent)
