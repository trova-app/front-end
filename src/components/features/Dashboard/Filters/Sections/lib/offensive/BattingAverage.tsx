import { useState, useEffect } from 'react'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

import { useSelector } from '../../../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../../../hooks/redux/useDispatch'

const BattingAverage: React.FC = ({ ...props }) => {
    const battingAverage = useSelector(state => state.filters.offensiveFilters.battingAverage)
    const dispatch = useDispatch()
    const [values, setValues] = useState(battingAverage)

    useEffect(() => {
        setValues(battingAverage)
    }, [battingAverage])

    return (
        <SectionContainer header="AVG">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={1}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    dispatch(setIsDefaultFilters(false))
                    dispatch(setOffensiveBounds({
                        key: "battingAverage",
                        value: values
                    }))
                }}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default BattingAverage