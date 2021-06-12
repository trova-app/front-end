import { useEffect } from 'react'
import { useSelector } from '../../../../hooks/redux/useSelector'
import { useGetPlayerDataQuery } from '../../../../redux/api/dataApi'

import { useDispatch } from '../../../../hooks/redux/useDispatch'
import { setDataRanges } from '../../../../redux/slices/filters'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable: React.FC = () => {
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters)
    const activeDivision = useSelector(state => state.filters.division)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const { data, isFetching } = useGetPlayerDataQuery(activeDivision, { skip: !token })

    useEffect(() => {
        if (data) {
            dispatch(setDataRanges({
                pitchers: data.meta.ranges.pitchers,
                hitters: data.meta.ranges.hitters
            }))
        }
    }, [data, activeDivision, dispatch])

    if (isFetching) return (
        <p style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -60%)" }}>Finding your data...</p>
    )

    if (filters.positions.P) {
        return <PitcherTable />
    } else {
        return <OffensiveTable />
    }
}


export default DataTable