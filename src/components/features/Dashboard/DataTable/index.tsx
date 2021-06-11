import { useSelector } from '../../../../hooks/redux/useSelector'
import { useGetPlayerDataQuery } from '../../../../redux/api/dataApi'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable: React.FC = () => {
    const filters = useSelector(state => state.filters)
    const activeDivision = useSelector(state => state.filters.division)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const { isLoading } = useGetPlayerDataQuery(activeDivision, { skip: !token })

    if (isLoading) return (
        <p style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -60%)" }}>Finding your data...</p>
    )

    if (filters.positions.P) {
        return <PitcherTable />
    } else {
        return <OffensiveTable />
    }
}


export default DataTable