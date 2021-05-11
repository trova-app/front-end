import { connect } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { logout } from '../../auth/logout'
import { setTokens, setUserAttributes } from '../../redux/slices/auth'

import FullScreen from '../../components/layouts/FullScreen'
import Header from '../../components/features/Dashboard/Header'
import Filters from '../../components/features/Dashboard/Filters'
import DataTable from '../../components/features/Dashboard/DataTable'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 82vh;
`

const Dashboard = ({ ...props }) => {
    return (
        <FullScreen>
            <Helmet>
                <title>Trova - Dashboard</title>
            </Helmet>
            <Header />
            <Container>
                <Filters />
                <DataTable />
            </Container>
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