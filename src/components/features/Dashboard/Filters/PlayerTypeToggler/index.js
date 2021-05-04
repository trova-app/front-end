import { connect } from 'react-redux'

import * as Styled from './style'

import { setPitcher } from '../../../../../redux/slices/filters'

const PlayerTypeToggler = ({ isShowingPitchers, setPitcher }) => {

    return (
        <Styled.Wrapper>
            <Styled.HighlighterBox value={isShowingPitchers} />
            <Styled.Pitchers
                onClick={() => setPitcher(true)}
                value={isShowingPitchers}
            >
                Pitchers
                </Styled.Pitchers>
            <Styled.Hitters
                onClick={() => setPitcher(false)}
                value={isShowingPitchers}
            >
                Hitters
            </Styled.Hitters>

        </Styled.Wrapper>
    )
}

export default connect(
    state => ({
        isShowingPitchers: state.filters.positions.P
    }),
    { setPitcher }
)(PlayerTypeToggler)