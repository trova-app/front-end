import { useEffect } from 'react'

import * as Styled from './style'

import {
    clearAllFilters,
    setIsDefaultFilters,
} from '../../../../redux/slices/filters'

import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'
import { setDataRanges } from '../../../../redux/slices/filters'
import { useGetPlayerDataQuery } from '../../../../redux/api/dataApi'

import PlayerTypeToggler from './PlayerTypeToggler'
import PitcherFilters from './PitcherFilters'
import OffensiveFilters from './OffensiveFilters'
import DivisionSelector from './DivisionSelector'



const Filters = () => {
    const filters = useSelector(state => state.filters)
    const isDefaultFilters = useSelector(state => state.filters.isDefaultFilters)
    const dispatch = useDispatch()

    const activeDivision = useSelector(state => state.filters.division)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)

    const { data } = useGetPlayerDataQuery(activeDivision, { skip: !token })

    useEffect(() => {
        if (data) {
            dispatch(setDataRanges({
                pitchers: data.meta.ranges.pitchers,
                hitters: data.meta.ranges.hitters
            }))
        }
    }, [data, activeDivision, dispatch])

    return (
        <Styled.Container>
            <Styled.Header>Filters</Styled.Header>
            <Styled.ClearFilters
                isDefaultFilters={isDefaultFilters}
                disabled={isDefaultFilters}
                onClick={() => {
                    dispatch(clearAllFilters({}))
                    dispatch(setIsDefaultFilters(true))
                }}>
                Clear filters
                </Styled.ClearFilters>
            <DivisionSelector />
            <PlayerTypeToggler />
            {
                data
                    ? filters.positions.P ? <PitcherFilters /> : <OffensiveFilters />
                    : null
            }
        </Styled.Container>
    )
}

export default Filters