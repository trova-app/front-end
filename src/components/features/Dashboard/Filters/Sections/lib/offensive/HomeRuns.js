import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const HomeRuns = ({ homeRuns, setOffensiveBounds }) => {
    const [values, setValues] = useState(homeRuns)

    useEffect(() => {
        setValues(homeRuns)
    }, [homeRuns])

    return (
        <SectionContainer header="HR">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "homeRuns",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        homeRuns: state.filters.offensiveFilters.homeRuns
    }),
    { setOffensiveBounds }
)(HomeRuns)