import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const StolenBases = ({ stolenBases, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(stolenBases)

    useEffect(() => {
        setValues(stolenBases)
    }, [stolenBases])

    return (
        <SectionContainer header="SB">
            <RangeInput
                step={1}
                rangeMin={stolenBases[0]}
                rangeMax={stolenBases[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "stolenBases",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        stolenBases: state.filters.offensiveFilters.stolenBases
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(StolenBases)