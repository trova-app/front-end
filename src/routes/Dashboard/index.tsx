import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Helmet } from 'react-helmet-async'

import FullScreen from '../../components/layouts/FullScreen'
import Header from '../../components/features/Dashboard/Header'
import Filters from '../../components/features/Dashboard/Filters/index'
import DataTable from '../../components/features/Dashboard/DataTable'

import { useSelector } from '../../hooks/redux/useSelector'
import { useGetPlayerDataQuery } from '../../redux/api/dataApi'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 82vh;
`

const LastUpdated = styled.div`
    position: absolute;
    right: 48px;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 18px;

`

const Dashboard: React.FC = ({ ...props }) => {
    const activeDivision = useSelector(state => state.filters.division)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const { data } = useGetPlayerDataQuery(activeDivision, { skip: !token })


    return (
        <FullScreen>
            <Helmet>
                <title>Trova - Dashboard</title>
            </Helmet>
            <Header />
            <Container>
                {data?.meta?.lastUpdatedDate && <LastUpdated>Last Updated - {data?.meta?.lastUpdatedDate}</LastUpdated>}
                <Filters />
                <DataTable />
            </Container>
        </FullScreen>
    )
}

export default Dashboard