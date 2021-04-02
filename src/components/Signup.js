import { useState } from 'react'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import UserPool from '../auth/Pool'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        UserPool.signUp(
            email,
            password,
            [new CognitoUserAttribute({
                Name: "custom:UserType",
                Value: "user"
            })],
            null,
            (err, data) => {
                if (err) return console.log(err)
            }
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
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup