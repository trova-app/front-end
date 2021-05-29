import React from 'react'
import { connect } from 'react-redux'

import { setPosition, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

import SectionContainer from '../../index'
import Checkbox from '../../../../../../shared/Checkbox'

const positionsArray = [
    {
        abbreviation: "C",
        label: "Catcher"
    },
    {
        abbreviation: "1B",
        label: "First Base"
    },
    {
        abbreviation: "2B",
        label: "Second Base"
    },
    {
        abbreviation: "SS",
        label: "Shortstop"
    },
    {
        abbreviation: "3B",
        label: "Third Base"
    },
    {
        abbreviation: "LF",
        label: "Left Field"
    },
    {
        abbreviation: "CF",
        label: "Center Field"
    },
    {
        abbreviation: "RF",
        label: "Right Field"
    },
]

const Position = ({ positions, setIsDefaultFilters, setPosition }) => (
    <SectionContainer title="Position">
        {positionsArray.map(({ label, abbreviation }) => (
            <Checkbox
                key={label}
                label={label}
                value={abbreviation}
                isSelected={positions[abbreviation]}
                onClick={() => {
                    setIsDefaultFilters(false)
                    setPosition(abbreviation)
                }}
            />

        ))}
    </SectionContainer>
)

export default connect(
    state => ({
        positions: state.filters.positions
    }),
    { setPosition, setIsDefaultFilters }
)(Position)