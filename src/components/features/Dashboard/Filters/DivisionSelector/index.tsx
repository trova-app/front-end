import * as Styled from './style'

import { setDivision } from '../../../../../redux/slices/filters'

import { useSelector } from '../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../hooks/redux/useDispatch'

const divisions = [
    {
        id: "d1",
        displayName: "D1"
    },
    {
        id: "juco",
        displayName: "JUCO"
    }
]

const DivisionSelector = ({ ...props }) => {
    const activeDivision = useSelector(state => state.filters.division)
    const dispatch = useDispatch()

    return (
        <Styled.Wrapper>
            {divisions.map((elem) => (
                <Styled.Button
                    key={elem.id}
                    isActive={elem.id === activeDivision}
                    onClick={() => dispatch(setDivision({ division: elem.id }))}
                >
                    {elem.displayName}
                </Styled.Button>
            ))}
        </Styled.Wrapper>
    )
}

export default DivisionSelector