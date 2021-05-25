import { useState } from 'react'
import styled from 'styled-components'

import FullScreen from '../components/layouts/FullScreen'
import SVG from '../components/svg'
import { colors } from '../styles/colors'

import FormLabel from '../components/shared/FormLabel'
import FormInput from '../components/shared/FormInput'

const Submit = styled.button`
    appearance: none;
    display: block;
    margin-left: auto;
    padding: 12px 24px;
    border: none;
    border-radius: 18px;
    background-color: ${colors.white};
    color: ${colors.slateBlue};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
`

const MobileViewWarning: React.FC = ({ ...props }) => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        setIsSubmitting(true)

        fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(res => {
                setIsSubmitting(false)
                setEmail("")
                setName("")
            })
            .catch(err => {
                setIsSubmitting(false)
                setEmail("")
                setName("")
            })
    }

    return (
        <FullScreen style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "7% 0",
            backgroundColor: colors.slateBlue,
            overflowY: "auto"
        }}>
            <SVG.TrovaLogo style={{ width: "25%", minWidth: "150px" }} />
            <div style={{ padding: "7%" }}>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Welcome to Trova!</p>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Sorry, we're still "alpha testing" and aren't supporting screens this small yet.</p>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Revisit us on a laptop or computer!</p>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Share your email with use to be notified when we have our mobile version ready!</p>
            </div>
            {!isSubmitting && <form onSubmit={onSubmit}>
                <FormLabel htmlFor="name">
                    Your Name
                </FormLabel>
                <FormInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    style={{ width: "100%" }}
                />
                <FormLabel htmlFor="email">
                    Your Email
                </FormLabel>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                />
                <Submit>Sign up</Submit>
            </form>}
        </FullScreen>
    )
}

export default MobileViewWarning