import { useState } from 'react'
import PropTypes from 'prop-types'

import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import UserPool from '../../../auth/Pool'

import * as Styled from '../style'
import Input from '../../../components/shared/FormInput'
import Label from '../../../components/shared/FormLabel'

interface Props {
    header: string,
    role: string
}

const SignUp: React.FC<Props> = ({ header, role }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        UserPool.signUp(
            email,
            password,
            [new CognitoUserAttribute({
                Name: "custom:role",
                Value: role
            })],
            [],
            (err, data) => {
                if (err) {
                    return setError(err.message)
                }

                setEmail("")
                setPassword("")
                setError("")
            }
        )
    }

    return (
        <Styled.Form onSubmit={onSubmit}>
            <Styled.Header>{header}</Styled.Header>
            <Label htmlFor="email">Email</Label>
            <Input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Styled.Error>{error}</Styled.Error>
            <Styled.SubmitButton type="submit">Signup</Styled.SubmitButton>
        </Styled.Form>
    )
}

SignUp.propTypes = {
    header: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["admin", "user"]).isRequired
}

export default SignUp