import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../auth/logout'
import { setTokens, setUserAttributes } from '../redux/slices/auth'
import { setModal } from '../redux/slices/view'
import AdminView from './Admin'
import Pool from '../auth/Pool'

const Dashboard = ({ auth, view, setTokens, setUserAttributes, setModal }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflowX: "hidden",
            }}
        >
            <button onClick={() => {
                const user = Pool.getCurrentUser()
                if (user) {
                    user.signOut()
                }
                setTokens(null)
                setUserAttributes(null)
            }}>
                Log me out
        </button>
            {auth.tokens.idToken.payload["cognito:groups"].includes("Admin") && <button onClick={() => setModal({ type: "Admin", data: {} })}>Open Admin View</button>}
            <p>{JSON.stringify(data)}</p>
            {view.modal.type === "Admin" && <AdminView />}

        </div>
    )
}

export default connect(
    state => ({
        auth: state.auth,
        view: state.view
    }),
    { logout, setTokens, setUserAttributes, setModal }
)(Dashboard)