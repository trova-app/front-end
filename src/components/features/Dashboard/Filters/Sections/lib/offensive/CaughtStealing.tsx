import { useState, useEffect } from 'react'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

import { useSelector } from '../../../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../../../hooks/redux/useDispatch'

const CaughtStealing: React.FC = ({ ...props }) => {
    const caughtStealing = useSelector(state => state.filters.offensiveFilters.caughtStealing)
    const dispatch = useDispatch()
    const [values, setValues] = useState(caughtStealing)

    useEffect(() => {
        setValues(caughtStealing)
    }, [caughtStealing])

    return (
        <SectionContainer header="CS">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    dispatch(setIsDefaultFilters(false))
                    dispatch(setOffensiveBounds({
                        key: "caughtStealing",
                        value: values
                    }))
                }}
            />
        </SectionContainer>
    )
}

export default CaughtStealing