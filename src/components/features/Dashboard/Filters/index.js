import React from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'

import { clearAllFilters } from '../../../../redux/slices/filters'

import PlayerTypeToggler from './PlayerTypeToggler'
import PitcherFilters from './PitcherFilters'
import OffensiveFilters from './OffensiveFilters'

const Filters = ({ filters, clearAllFilters }) => {
    return (
        <Styled.Container>
            <Styled.Header>Filters</Styled.Header>
            <Styled.ClearFilters onClick={() => clearAllFilters()}>Clear filters</Styled.ClearFilters>
            <PlayerTypeToggler />
            {filters.positions.P ? <PitcherFilters /> : <OffensiveFilters />}
        </Styled.Container>
    )
}

export default connect(
    state => ({
        filters: state.filters,
    }),
    { clearAllFilters }
)(Filters)