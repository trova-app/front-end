import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Styled from './style'
import { colors } from '../../styles/colors'
import { initiateForgotPassword } from '../../auth/forgotPassword'

import BlobContainer from '../../components/layouts/BlobContainer'
import Label from '../../components/shared/FormLabel'
import Input from '../../components/shared/FormInput'

const Component = ({ ...props }) => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        initiateForgotPassword(email)
            .then(res => history.push("/reset-password"))
            .catch(err => setError("You must enter a valid email address."))
    }

    return (
        <BlobContainer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: "10%"
            }}
            bannerComponent={
                <p style={{
                    position: "fixed",
                    top: "5vh",
                    right: "5vw",
                    height: "10vh"
                }}>
                    <Styled.AuxText color={colors.lightBlue}>Know your password?</Styled.AuxText>
                    <Styled.AuxLink to="/request-access" color={colors.slateBlue}>Back to login.</Styled.AuxLink>
                </p>
            }
        >
            <Styled.Header>Forgot Password</Styled.Header>
            <Styled.P>Enter the email address associated with your account and we’ll send you a message with instructions to reset your password.</Styled.P>
            <Styled.Form onSubmit={onSubmit}>
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
                <Styled.Submit isError={error}>SEND EMAIL</Styled.Submit>
            </Styled.Form>
            <Styled.Error>{error}</Styled.Error>
            <p>
                <Styled.AuxText>Already have a code?</Styled.AuxText>
                <Styled.AuxLink to="/reset-password">Reset your password.</Styled.AuxLink>
            </p>
            <Styled.AuxLink to="/login">Back to login.</Styled.AuxLink>
        </BlobContainer>
    )
}

export default connect(
    null,
    null
)(Component)