import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

import { setData } from '../../../../redux/slices/data'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable = ({
    data,
    setData,
    filters,
}) => {
    const idToken = useSelector(state => state.auth.tokens.idToken.jwtToken)

    useEffect(() => {
        if (data.length === 0)
            fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/data`, {
                headers: {
                    "Authorization": `Bearer: ${idToken}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    setData(res)
                })
    }, [idToken, data, setData])

    if (filters.positions.P) {
        return <PitcherTable />
    } else {
        return <OffensiveTable />
    }
}


export default connect(
    state => ({
        data: state.data.dataset,
        filters: state.filters
    }),
    { setData }
)(DataTable)