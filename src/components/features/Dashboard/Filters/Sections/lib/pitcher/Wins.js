import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Wins = ({ wins, setPitcherBounds }) => {
    const [values, setValues] = useState(wins)

    useEffect(() => {
        setValues(wins)
    }, [wins])

    return (
        <SectionContainer header="W">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={50}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "wins",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        wins: state.filters.pitcherFilters.wins
    }),
    { setPitcherBounds }
)(Wins)