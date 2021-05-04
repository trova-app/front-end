import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const OnBasePlusSlugging = ({ onBasePlusSlugging, setOffensiveBounds }) => {
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
                setFinalValues={() => setOffensiveBounds({
                    key: "onBasePlusSlugging",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        onBasePlusSlugging: state.filters.offensiveFilters.onBasePlusSlugging
    }),
    { setOffensiveBounds }
)(OnBasePlusSlugging)