import { initialState } from '../../../../../redux/slices/filters'
import { useState, useEffect } from 'react'
import SectionContainer from './index'
import RangeInput from '../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../redux/slices/filters'

import { useSelector } from '../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../hooks/redux/useDispatch'

interface Props {
    filterKey: keyof typeof initialState.offensiveFilters,
    title: string,
    step: number,
    toFixed: number,
    units?: "percentage"
}

const OffensiveRangeSelector: React.FC<Props> = ({
    filterKey,
    title,
    step,
    toFixed,
    units
}) => {
    const stat = useSelector(state => state.filters.offensiveFilters[filterKey])
    const statExtremes = useSelector(state => state.filters.offensiveExtremities[filterKey])
    const dispatch = useDispatch()
    const [values, setValues] = useState(stat)

    useEffect(() => {
        setValues(stat)
    }, [stat])

    return (
        <SectionContainer title={title}>
            <RangeInput
                step={step}
                rangeMin={statExtremes[0]}
                rangeMax={statExtremes[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    dispatch(setIsDefaultFilters(false))
                    dispatch(setOffensiveBounds({
                        key: filterKey,
                        value: values
                    }))
                }}
                toFixed={toFixed}
                units={units}
            />
        </SectionContainer>
    )
}

export default OffensiveRangeSelector