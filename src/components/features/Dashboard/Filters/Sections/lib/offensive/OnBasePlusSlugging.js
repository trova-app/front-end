import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const OnBasePlusSlugging = ({ onBasePlusSlugging, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(onBasePlusSlugging)

    useEffect(() => {
        setValues(onBasePlusSlugging)
    }, [onBasePlusSlugging])

    return (
        <SectionContainer header="OPS">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={2}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "onBasePlusSlugging",
                        value: values
                    })
                }}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        onBasePlusSlugging: state.filters.offensiveFilters.onBasePlusSlugging
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(OnBasePlusSlugging)