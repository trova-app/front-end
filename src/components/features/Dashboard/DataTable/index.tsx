import { useState, useEffect } from 'react'

import { setData } from '../../../../redux/slices/data'
import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable: React.FC = () => {
    const [fetching, setFetching] = useState(false)
    const data = useSelector(state => state.data.dataset)
    const filters = useSelector(state => state.filters)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const dispatch = useDispatch()

    useEffect(() => {
        if (data.length === 0 && token) {
            setFetching(true)
            fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/data`, {
                headers: {
                    "Authorization": `Bearer: ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    setFetching(false)
                    dispatch(setData(res.data))
                })
        }
    }, [dispatch, token, data])

    if (fetching) return (
        <p style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -60%)" }}>Loading...</p>
    )

    if (filters.positions.P) {
        return <PitcherTable />
    } else {
        return <OffensiveTable />
    }
}


export default DataTable