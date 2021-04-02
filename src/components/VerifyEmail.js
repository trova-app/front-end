import { useState } from 'react'
import { connect } from 'react-redux'
import { verifyEmail } from '../auth/verifyEmail'
import { authenticate } from '../auth/authenticate'
import { resendVerificationCode } from '../auth/resendVerificationCode'

import { setView } from '../redux/slices/view'
import { setUserAttributes, setTokens } from '../redux/slices/auth'

const ConfirmEmail = ({ setView, setUserAttributes, setTokens }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verificationCode, setVerificationCode] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()

        verifyEmail(verificationCode, email, password)
            .then(({ Username, Password }) => {
                authenticate(Username, Password)
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
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <button onClick={() => resendVerificationCode(email)}>Resend Verification</button>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="email">Code</label>
                <input
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                <button type="submit">Confirm Code</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { setView, setUserAttributes, setTokens }
)(ConfirmEmail)