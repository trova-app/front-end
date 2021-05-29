import { useState, useEffect } from 'react'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

import { useSelector } from '../../../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../../../hooks/redux/useDispatch'

const AtBats: React.FC = ({ ...props }) => {
    const atBats = useSelector(state => state.filters.offensiveFilters.atBats)
    const atBatsExtremeties = useSelector(state => state.filters.offensiveExtremities.atBats)
    const dispatch = useDispatch()
    const [values, setValues] = useState(atBats)

    useEffect(() => {
        setValues(atBats)
    }, [atBats])

    return (
        <SectionContainer header="AB">
            <RangeInput
                step={1}
                rangeMin={atBatsExtremeties[0]}
                rangeMax={atBatsExtremeties[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    dispatch(setIsDefaultFilters(false))
                    dispatch(setOffensiveBounds({
                        key: "atBats",
                        value: values
                    }))
                }}
            />
        </SectionContainer>
    )
}

export default AtBats