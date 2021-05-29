import { initialState } from '../../../../../redux/slices/filters'
import { useState, useEffect } from 'react'
import SectionContainer from './index'
import RangeInput from '../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../redux/slices/filters'

import { useSelector } from '../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../hooks/redux/useDispatch'

interface Props {
    filterKey: keyof typeof initialState.pitcherFilters,
    title: string,
    step: number,
    toFixed?: number,
    units?: "percentage"
}

const PitcherRangeSelector: React.FC<Props> = ({
    filterKey,
    title,
    step,
    toFixed,
    units
}) => {
    const stat = useSelector(state => state.filters.pitcherFilters[filterKey])
    const statExtremes = useSelector(state => state.filters.pitcherExtremities[filterKey])
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
                    dispatch(setPitcherBounds({
                        key: filterKey,
                        value: values
                    }))
                }}
                toFixed={toFixed || 0}
                units={units}
            />
        </SectionContainer>
    )
}

export default PitcherRangeSelector