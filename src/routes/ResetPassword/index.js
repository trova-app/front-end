import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Styled from './style'
import { colors } from '../../styles/colors'
import { changeForgottenPassword } from '../../auth/forgotPassword'

import BlobContainer from '../../components/layouts/BlobContainer'
import Label from '../../components/shared/FormLabel'
import Input from '../../components/shared/FormInput'

const Component = ({ ...props }) => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [newPasswordCode, setNewPasswordCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [error, setError] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()

        if (!email) {
            return setError("You must provide your email address.")
        }

        if (!newPasswordCode) {
            return setError("You must provide a reset code.")
        }

        if (newPassword !== confirmNewPassword) {
            return setError("Your new passwords don't match.")
        }

        changeForgottenPassword(email, newPasswordCode, newPassword)
            .then(res => history.push("/login"))
            .catch(err => {
                if (err.code === "InvalidParameterException") {
                    return setError("Your password must be longer than 6 characters and contain at least one capital letter, one number, and one symbol.")
                }

                return setError("You have not provided a valid reset code. If you need a new one, please request a new one.")
            })
    }

    return (
        <BlobContainer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            bannerComponent={
                <p style={{
                    position: "fixed",
                    top: "5vh",
                    right: "5vw",
                    height: "10vh"
                }}>
                    <Styled.AuxText color={colors.lightBlue}>Need a new code?</Styled.AuxText>
                    <Styled.AuxLink to="/forgot-password" color={colors.slateBlue}>Request a new one.</Styled.AuxLink>
                </p>
            }
        >
            <Styled.Header>Reset Password</Styled.Header>
            <form onSubmit={onSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setError("")
                        setEmail(e.target.value)
                    }}
                />
                <Label htmlFor="newPasswordCode">New Password Code</Label>
                <Input
                    name="newPasswordCode"
                    type="text"
                    placeholder="Provided via email"
                    value={newPasswordCode}
                    onChange={(e) => {
                        setError("")
                        setNewPasswordCode(e.target.value)
                    }}
                />
                <Label htmlFor="newPasswordCode">New Password</Label>
                <Input
                    name="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                        setError("")
                        setNewPassword(e.target.value)
                    }}
                />
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input
                    name="confirmNewPassword"
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => {
                        setError("")
                        setConfirmNewPassword(e.target.value)
                    }}
                />
                <Styled.Error>{error}</Styled.Error>
                <Styled.Submit type="submit" isError={error}>RESET PASSWORD</Styled.Submit>
            </form>
            <p>
                <Styled.AuxText>Need a new code?</Styled.AuxText>
                <Styled.AuxLink to="/forgot-password">Request a new one.</Styled.AuxLink>
            </p>
            <Styled.AuxLink to="/login">Back to login.</Styled.AuxLink>
        </BlobContainer>
    )
}

export default connect(
    null,
    null
)(Component)