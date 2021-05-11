import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import * as Styled from './style'
import { colors } from '../../styles/colors'

import { authenticate } from '../../auth/authenticate'
import { setTokens, setUserAttributes } from '../../redux/slices/auth'


import BlobContainer from '../../components/layouts/BlobContainer'
import FormLabel from '../../components/shared/FormLabel'
import FormInput from '../../components/shared/FormInput'

const RequestAccess = ({ setUserAttributes, setTokens }) => {
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()

        fetch(`https://ki009fkwji.execute-api.us-west-1.amazonaws.com/dev/contact`, {
            method: "POST",
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                authenticate("tester@inthezone.dev", "AlphaTest!1")
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

                        history.push("/dashboard")
                    })
                    .catch(err => {
                        console.error("Login Error: ", err)
                    })
            })
            .catch(err => console.error(err))
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
                    top: "3vh",
                    right: "5vw",
                    height: "10vh"
                }}>
                    <Helmet>
                        <title>Trova - Request Access</title>
                    </Helmet>
                    <Styled.AuxText color={colors.lightBlue}>Already have an account?</Styled.AuxText>
                    <Styled.AuxLink to="/login" color={colors.slateBlue}>Log in.</Styled.AuxLink>
                </p>
            }
        >
            <Styled.Header>Get started with <span>Trova</span></Styled.Header>
            <Styled.P>Welcome to the alpha stage test of Trova.<br />Enter your info in the form below and we'll give you instant access!</Styled.P>
            <Styled.Form onSubmit={onSubmit}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                    style={{ width: "40%" }}
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setError("")
                        setName(e.target.value)
                    }}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    style={{ width: "40%" }}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setError("")
                        setEmail(e.target.value)
                    }}
                />
                <Styled.Submit isError={!!error} type="submit">REQUEST<br />ACCESS</Styled.Submit>
            </Styled.Form>
{/*
            <div>
                <p>
                    <Styled.AuxText>Already registered?</Styled.AuxText>
                    <Styled.AuxLink to="/request-access">Login.</Styled.AuxLink>
                </p>
            </div> */}
        </BlobContainer>
    )
}

export default connect(
    null,
    { setUserAttributes, setTokens }
)(RequestAccess)