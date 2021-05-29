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
import HitRate from './Sections/lib/pitcher/HitRate'
import StrikeoutRate from './Sections/lib/pitcher/StrikeoutRate'
import StrikeoutsToWalksRatio from './Sections/lib/pitcher/StrikeoutsToWalksRatio'
import WalkRate from './Sections/lib/pitcher/WalkRate'

const Filters: React.FC = ({ ...props }) => {
    return (
        <Styled.Scrollable>
            <Styled.HR />
            <Appearances />
            <EarnedRunAverage />
            <EarnedRuns />
            <GamesStarted />
            <CompleteGames />
            <Shutouts />
            <InningsPitched />
            <StrikeoutsToWalksRatio />
            <Strikeouts />
            <StrikeoutRate />
            <Walks />
            <WalkRate />
            <OpposingBattingAverage />
            <Hits />
            <HitRate />
            <HitByPitches />
            <Runs />
            <Saves />
            <WildPitches />
            <Wins />
            <Losses />
        </Styled.Scrollable>
    )
}

export default Filters