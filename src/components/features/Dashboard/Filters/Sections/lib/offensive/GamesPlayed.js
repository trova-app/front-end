import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters, } from '../../../../../../../redux/slices/filters'

const GamesPlayed = ({ gamesPlayed, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(gamesPlayed)

    useEffect(() => {
        setValues(gamesPlayed)
    }, [gamesPlayed])

    return (
        <SectionContainer header="GP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "gamesPlayed",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        gamesPlayed: state.filters.offensiveFilters.gamesPlayed
    }),
    { setOffensiveBounds, setIsDefaultFilters, }
)(GamesPlayed)