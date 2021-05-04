import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const StolenBases = ({ stolenBases, setOffensiveBounds }) => {
    const [values, setValues] = useState(stolenBases)

    useEffect(() => {
        setValues(stolenBases)
    }, [stolenBases])

    return (
        <SectionContainer header="SB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "stolenBases",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        stolenBases: state.filters.offensiveFilters.stolenBases
    }),
    { setOffensiveBounds }
)(StolenBases)