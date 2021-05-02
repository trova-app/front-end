import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const Triples = ({ triples, setBounds }) => {
    const [values, setValues] = useState(triples)

    return (
        <SectionContainer header="3B">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "triples",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        triples: state.filters.triples
    }),
    { setBounds }
)(Triples)