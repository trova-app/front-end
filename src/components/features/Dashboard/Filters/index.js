import React from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'

import { clearAllFilters, setIsDefaultFilters } from '../../../../redux/slices/filters'

import PlayerTypeToggler from './PlayerTypeToggler'
import PitcherFilters from './PitcherFilters'
import OffensiveFilters from './OffensiveFilters'

const Filters = ({ filters, isDefaultFilters, setIsDefaultFilters, clearAllFilters }) => {

    return (
        <Styled.Container>
            <Styled.Header>Filters</Styled.Header>
            <Styled.ClearFilters
                isDefaultFilters={isDefaultFilters}
                disabled={isDefaultFilters}
                onClick={() => {
                    clearAllFilters()
                    setIsDefaultFilters(true)
                }}>
                Clear filters
                </Styled.ClearFilters>
            <PlayerTypeToggler />
            {filters.positions.P ? <PitcherFilters /> : <OffensiveFilters />}
        </Styled.Container>
    )
}

export default connect(
    state => ({
        filters: state.filters,
        isDefaultFilters: state.filters.isDefaultFilters
    }),
    { clearAllFilters, setIsDefaultFilters }
)(Filters)