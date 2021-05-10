import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const GamesStarted = ({ gamesStarted, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(gamesStarted)

    useEffect(() => {
        setValues(gamesStarted)
    }, [gamesStarted])

    return (
        <SectionContainer header="GS">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={56}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "gamesStarted",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        gamesStarted: state.filters.pitcherFilters.gamesStarted
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(GamesStarted)