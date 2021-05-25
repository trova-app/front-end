import * as Styled from './style'

import { setPitcher } from '../../../../../redux/slices/filters'

import { useSelector } from '../../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../../hooks/redux/useDispatch'

const PlayerTypeToggler: React.FC = ({ ...props }) => {
    const isShowingPitchers = useSelector(state => state.filters.positions.P)
    const dispatch = useDispatch()

    return (
        <Styled.Wrapper>
            <Styled.HighlighterBox isShowingPitchers={isShowingPitchers} />
            <Styled.Pitchers
                onClick={() => dispatch(setPitcher(true))}
                isShowingPitchers={isShowingPitchers}
            >
                Pitchers
                </Styled.Pitchers>
            <Styled.Hitters
                onClick={() => dispatch(setPitcher(false))}
                isShowingPitchers={isShowingPitchers}
            >
                Hitters
            </Styled.Hitters>

        </Styled.Wrapper>
    )
}

export default PlayerTypeToggler