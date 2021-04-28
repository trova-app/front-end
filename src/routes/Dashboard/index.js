import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../auth/logout'
import { setTokens, setUserAttributes } from '../../redux/slices/auth'
import AdminView from '../../components/Admin'
import Pool from '../../auth/Pool'

const Dashboard = ({ auth, view, setTokens, setUserAttributes }) => {
    const [data, setData] = useState([])
    const history = useHistory()

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
                history.push("/login")
            }}>
                Log me out
        </button>
            {auth.tokens.idToken.payload["cognito:groups"].includes("Admin") && <button onClick={() => history.push("/admin")}>Open Admin View</button>}
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
    { logout, setTokens, setUserAttributes }
)(Dashboard)