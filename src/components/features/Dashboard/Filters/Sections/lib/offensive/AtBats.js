import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const AtBats = ({ atBats, setOffensiveBounds }) => {
    const [values, setValues] = useState(atBats)

    useEffect(() => {
        setValues(atBats)
    }, [atBats])

    return (
        <SectionContainer header="AB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={350}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "atBats",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        atBats: state.filters.offensiveFilters.atBats
    }),
    { setOffensiveBounds }
)(AtBats)