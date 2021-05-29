import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Wins = ({ wins, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(wins)

    useEffect(() => {
        setValues(wins)
    }, [wins])

    return (
        <SectionContainer header="W">
            <RangeInput
                step={1}
                rangeMin={wins[0]}
                rangeMax={wins[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "wins",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        wins: state.filters.pitcherFilters.wins
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Wins)