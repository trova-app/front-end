import { useState } from 'react'
import { connect } from 'react-redux'

import { authenticate } from '../auth/authenticate'
import { verifyEmail } from '../auth/verifyEmail'
import { resendVerificationCode } from '../auth/resendVerificationCode'
import { initiateForgotPassword, changeForgottenPassword } from '../auth/forgotPassword'
import { setTokens, setUserAttributes } from '../redux/slices/auth'
import { setModal } from '../redux/slices/view'

const SignupComponent = ({ setTokens, setUserAttributes, setModal }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [needsVerification, setNeedsVerification] = useState(false)
    const [verificationCode, setVerificationCode] = useState("")
    const [newPasswordCode, setNewPasswordCode] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const verify = (event) => {
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
                    })
            })
            .catch(err => console.error(err))
    }

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
                setModal("dashboard")
            })
            .catch(err => {
                if (err.code === "UserNotConfirmedException") {
                    setNeedsVerification(true)
                } else {
                    console.error("Login Error: ", err)
                }
            })
    }

    const newPasswordSubmit = (event) => {
        event.preventDefault()

        changeForgottenPassword(email, newPasswordCode, newPassword)
    }

    if (needsVerification) {
        return (
            <div>
                <button onClick={() => resendVerificationCode(email)}>Resend Verification</button>
                <form onSubmit={verify}>
                    <label htmlFor="verificationCode">VerificationCode</label>
                    <input
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <button type="submit">Verify</button>
                </form>
            </div>
        )
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
            <button onClick={() => initiateForgotPassword(email)}>Forgot Password?</button>
            <form onSubmit={newPasswordSubmit}>
                <label htmlFor="newPasswordCode">New Password Code</label>
                <input
                    value={newPasswordCode}
                    onChange={(e) => setNewPasswordCode(e.target.value)}
                />
                <label htmlFor="newPasswordCode">New Password</label>
                <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit">Change Password</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { setTokens, setUserAttributes, setModal }
)(SignupComponent)
