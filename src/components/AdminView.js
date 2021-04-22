import React from 'react'
import { connect } from 'react-redux'
import { setModal } from '../redux/slices/view'

// Make sure you check that the user is an admin with this snippet. Short circuit the render if they aren't.
// auth.tokens.idToken.payload["cognito:groups"].includes("Admin")

const AdminView = ({ setModal }) => {
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
            Make something great with the AdminView component here!
            <button onClick={() => setModal({ type: "", data: {} })}>Close</button>
        </div>
    )
}

export default connect(
    state => ({
        auth: state.auth,
    }),
    { setModal }
)(AdminView)