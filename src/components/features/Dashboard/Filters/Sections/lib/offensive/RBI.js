import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const RBI = ({ rbi, setOffensiveBounds }) => {
    const [values, setValues] = useState(rbi)

    useEffect(() => {
        setValues(rbi)
    }, [rbi])

    return (
        <SectionContainer header="RBI">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={300}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "rbi",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        rbi: state.filters.offensiveFilters.rbi
    }),
    { setOffensiveBounds }
)(RBI)