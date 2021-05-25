import { useState, useEffect } from 'react'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

import { useSelector } from '../../../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../../../hooks/redux/useDispatch'

const Doubles: React.FC = ({ ...props }) => {
    const doubles = useSelector(state => state.filters.offensiveFilters.doubles)
    const dispatch = useDispatch()
    const [values, setValues] = useState(doubles)

    useEffect(() => {
        setValues(doubles)
    }, [doubles])

    return (
        <SectionContainer header="2B">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    dispatch(setIsDefaultFilters(false))
                    dispatch(setOffensiveBounds({
                        key: "doubles",
                        value: values
                    }))
                }}
            />
        </SectionContainer>
    )
}

export default Doubles