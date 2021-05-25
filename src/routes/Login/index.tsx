import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { authenticate } from '../../auth/authenticate'
import { verifyEmail } from '../../auth/verifyEmail'
import { resendVerificationCode } from '../../auth/resendVerificationCode'
import { setTokens, setUserAttributes } from '../../redux/slices/auth'

import { useSelector } from '../../hooks/redux/useSelector'
import { useDispatch } from '../../hooks/redux/useDispatch'

import { colors } from '../../styles/colors'
import * as Styled from './style'
import BlobContainer from '../../components/layouts/BlobContainer'
import Input from '../../components/shared/FormInput'
import Label from '../../components/shared/FormLabel'

const SignupComponent: React.FC = ({ ...props }) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [needsVerification, setNeedsVerification] = useState(false)
    const [verificationCode, setVerificationCode] = useState("")

    const history = useHistory()

    useEffect(() => {
        if (auth.tokens !== null) {
            history.push("/dashboard")
        }
    }, [history, auth])

    const verify = (event: React.FormEvent) => {
        event.preventDefault()

        verifyEmail(verificationCode, email, password)
            .then(({ Username, Password }) => {
                authenticate(Username, Password)
                    .then(({ session, attributes }) => {
                        dispatch(setUserAttributes(attributes))
                        dispatch(setTokens({
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
                        }))
                    })
            })
            .catch(err => console.error(err))
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        authenticate(email, password)
            .then(({ session, attributes }) => {
                dispatch(setUserAttributes(attributes))
                dispatch(setTokens({
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
                }))

                history.push("/dashboard")
            })
            .catch(err => {
                console.error("Login Error: ", err)
                if (err.code === "UserNotConfirmedException") {
                    return setNeedsVerification(true)
                }

                if (err.code === "NotAuthorizedException") {
                    return setLoginError(err.message)
                }

                if (err.code === "InvalidParameterException") {
                    return setLoginError("You must enter a username and password.")
                }
                setIsSubmitting(false)
            })
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
        <BlobContainer style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
            bannerComponent={
                <p style={{
                    position: "fixed",
                    top: "3vh",
                    right: "5vw",
                    height: "10vh"
                }}>
                    <Helmet>
                        <title>Trova - Login</title>
                    </Helmet>
                    <Styled.AuxText color={colors.lightBlue}>Not registered yet?</Styled.AuxText>
                    <Styled.AuxLink to="/request-access" color={colors.slateBlue}>Request access.</Styled.AuxLink>
                </p>
            }
        >
            <Styled.TopBlock>
                <Styled.Header>Login</Styled.Header>
                <Styled.Form onSubmit={onSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        style={{ width: "40%" }}
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setLoginError("")
                            setEmail(e.target.value)
                        }}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        style={{ width: "40%" }}
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setLoginError("")
                            setPassword(e.target.value)
                        }}
                    />
                    <Styled.LoginError>{loginError}</Styled.LoginError>
                    <Styled.Submit isError={!!loginError} isSubmitting={isSubmitting} disabled={isSubmitting} type="submit">LOG IN</Styled.Submit>
                </Styled.Form>
            </Styled.TopBlock>
            <div>
                <p>
                    <Styled.AuxText>Not registered yet?</Styled.AuxText>
                    <Styled.AuxLink to="/request-access">Request access.</Styled.AuxLink>
                </p>
                <Styled.AuxLink to="/forgot-password">Forgot password?</Styled.AuxLink>
            </div>
        </BlobContainer>
    )
}

export default SignupComponent
