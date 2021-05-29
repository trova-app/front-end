
import * as Styled from './style'

import { clearAllFilters, setIsDefaultFilters } from '../../../../redux/slices/filters'

import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import PlayerTypeToggler from './PlayerTypeToggler'
import PitcherFilters from './PitcherFilters'
import OffensiveFilters from './OffensiveFilters'

const Filters = () => {
    const dataIsFetched = useSelector(state => state.data.dataset).length > 0
    const filters = useSelector(state => state.filters)
    const isDefaultFilters = useSelector(state => state.filters.isDefaultFilters)
    const dispatch = useDispatch()

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
            <PlayerTypeToggler />
            {dataIsFetched
                ? filters.positions.P ? <PitcherFilters /> : <OffensiveFilters />
                : null}
        </Styled.Container>
    )
}

export default Filters