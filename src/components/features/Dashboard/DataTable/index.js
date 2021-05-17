import { useState, useEffect } from 'react'
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
    const [fetching, setFetching] = useState(false)
    const idToken = useSelector(state => state.auth.tokens.idToken.jwtToken)

    useEffect(() => {
        if (data.length === 0)
            setFetching(true)
        fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/data`, {
            headers: {
                "Authorization": `Bearer: ${idToken}`
            }
        })
            .then(res => res.json())
            .then(res => {
                setFetching(false)
                setData(res.data)
            })
    }, [idToken, data, setData])

    if (fetching) return (
        <p style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -60%)" }}>Loading...</p>
    )

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