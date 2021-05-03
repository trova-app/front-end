import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const Strikeouts = ({ strikeouts, setBounds }) => {
    const [values, setValues] = useState(strikeouts)

    useEffect(() => {
        setValues(strikeouts)
    }, [strikeouts])

    return (
        <SectionContainer header="SO">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "strikeouts",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        strikeouts: state.filters.strikeouts
    }),
    { setBounds }
)(Strikeouts)