import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Make sure you check that the user is an admin with this snippet. Short circuit the render if they aren't.
// auth.tokens.idToken.payload["cognito:groups"].includes("Admin")
// Do this at the router level!

import SignUp from './Signup'

const Admin = () => {
    const history = useHistory()

    return (
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            minWidth: "100vw",
            minHeight: "100vh",
            backgroundColor: "green",
            zIndex: 999
        }}>
            <SignUp />
            <button onClick={() => history.push("/dashboard")}>Close</button>
        </div>
    )
}

export default connect(
    state => ({
        auth: state.auth,
    }),
    null
)(Admin)