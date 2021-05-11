import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const CompleteGames = ({ completeGames, setPitcherBounds }) => {
    const [values, setValues] = useState(completeGames)

    useEffect(() => {
        setValues(completeGames)
    }, [completeGames])

    return (
        <SectionContainer header="CG">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={25}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "completeGames",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        completeGames: state.filters.pitcherFilters.completeGames
    }),
    { setPitcherBounds }
)(CompleteGames)