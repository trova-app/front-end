import { useState } from 'react'
import { connect } from 'react-redux'
import { getSession } from '../auth/getSession'
import { setTokens, setUserAttributes } from '../redux/slices/auth'
import { logout } from '../auth/logout'

const ChangePassword = ({ setTokens, setUserAttributes }) => {
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()

        getSession()
            .then(({ user }) => {
                user.changePassword(password, newPassword, (err, result) => {
                    if (err) {
                        console.error(err)
                    } else {
                        logout()
                        setTokens(null)
                        setUserAttributes(null)
                    }
                })
            })
    }

    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="newPassword">New Password</label>
                <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit">Change</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { setTokens, setUserAttributes }
)(ChangePassword)