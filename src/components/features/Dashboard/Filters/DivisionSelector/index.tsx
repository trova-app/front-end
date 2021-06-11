import * as Styled from './style'

import { setDivision } from '../../../../../redux/slices/filters'

import { useSelector } from '../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../hooks/redux/useDispatch'

const DivisionSelector = ({ ...props }) => {
    const activeDivision = useSelector(state => state.filters.division)
    const dispatch = useDispatch()


    return (
        <Styled.Wrapper onClick={() => dispatch(setDivision({ division: "juco" }))}>
            {activeDivision}
        </Styled.Wrapper>
    )
}

export default DivisionSelector