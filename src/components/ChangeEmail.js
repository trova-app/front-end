import { useState } from 'react'
import { connect } from 'react-redux'
import { getSession } from '../auth/getSession'
import { setTokens } from '../redux/slices/auth'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { authenticate } from '../auth/authenticate'
import { logout } from '../auth/logout'

const ChangeEmail = ({ setTokens }) => {
    const [newEmail, setNewEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()

        getSession()
            .then(({ user, email }) => {
                authenticate(email, password).then(() => {
                    const attributes = [
                        new CognitoUserAttribute({ Name: "email", Value: newEmail })
                    ]

                    user.updateAttributes(attributes, (err, results) => {
                        if (err) {
                            console.error(err)
                            logout()
                            setTokens(null)
                        } else {
                            logout()
                            setTokens(null)
                        }
                    })
                })
            })
    }

    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <label htmlFor="password">New Email</label>
                <input
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <label htmlFor="newPassword">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Change</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { setTokens }
)(ChangeEmail)