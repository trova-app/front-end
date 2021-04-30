// import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../auth/logout'
import { setTokens, setUserAttributes } from '../../redux/slices/auth'

import FullScreen from '../../components/layouts/FullScreen'
import Header from '../../components/features/Dashboard/Header'

const Dashboard = ({ ...props }) => {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setData(res)
    //         })
    // }, [])

    return (
        <FullScreen>
            <Header />
        </FullScreen>
    )
}

export default connect(
    state => ({
        auth: state.auth,
        view: state.view
    }),
    { logout, setTokens, setUserAttributes }
)(Dashboard)