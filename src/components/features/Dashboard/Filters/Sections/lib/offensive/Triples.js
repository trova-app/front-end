import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Triples = ({ triples, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(triples)

    useEffect(() => {
        setValues(triples)
    }, [triples])

    return (
        <SectionContainer header="3B">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "triples",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        triples: state.filters.offensiveFilters.triples
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(Triples)