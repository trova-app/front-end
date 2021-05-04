import React from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'


import Appearances from './Sections/lib/pitcher/Appearances'
import CompleteGames from './Sections/lib/pitcher/CompleteGames'
import EarnedRunAverage from './Sections/lib/pitcher/EarnedRunAverage'
import EarnedRuns from './Sections/lib/pitcher/EarnedRuns'
import GamesStarted from './Sections/lib/pitcher/GamesStarted'
import HitByPitches from './Sections/lib/pitcher/HitByPitches'
import Hits from './Sections/lib/pitcher/Hits'
import InningsPitched from './Sections/lib/pitcher/InningsPitched'
import Losses from './Sections/lib/pitcher/Losses'
import OpposingBattingAverage from './Sections/lib/pitcher/OpposingBattingAverage'
import Runs from './Sections/lib/pitcher/Runs'
import Saves from './Sections/lib/pitcher/Saves'
import Shutouts from './Sections/lib/pitcher/Shutouts'
import Strikeouts from './Sections/lib/pitcher/Strikeouts'
import Walks from './Sections/lib/pitcher/Walks'
import WildPitches from './Sections/lib/pitcher/WildPitches'
import Wins from './Sections/lib/pitcher/Wins'

const Filters = ({ ...props }) => {
    return (

        <Styled.Scrollable>
            <Appearances />
            <CompleteGames />
            <EarnedRunAverage />
            <EarnedRuns />
            <GamesStarted />
            <HitByPitches />
            <Hits />
            <InningsPitched />
            <Losses />
            <OpposingBattingAverage />
            <Runs />
            <Saves />
            <Shutouts />
            <Strikeouts />
            <Walks />
            <WildPitches />
            <Wins />
        </Styled.Scrollable>
    )
}

export default connect(
    null,
    null
)(Filters)