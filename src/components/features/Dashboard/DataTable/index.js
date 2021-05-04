import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setData } from '../../../../redux/slices/data'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable = ({
    data,
    setData,
    filters,
}) => {
    useEffect(() => {
        if (data.length === 0)
            fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
                .then(res => res.json())
                .then(res => {
                    setData(res)
                })
    }, [data, setData])

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