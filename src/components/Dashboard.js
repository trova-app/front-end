import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../auth/logout'
import { setTokens, setUserAttributes } from '../redux/slices/auth'

const Dashboard = ({ auth, logout, setTokens, setUserAttributes }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        console.log('hi')
        fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            })
    }, [])

    return (
        <>
            <button onClick={() => {
                logout()
                setTokens(null)
                setUserAttributes(null)
            }}>
                Log me out
        </button>
            <p>{JSON.stringify(auth.userAttributes)}</p>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default connect(
    state => ({
        auth: state.auth
    }),
    { logout, setTokens, setUserAttributes }
)(Dashboard)