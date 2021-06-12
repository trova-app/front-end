import * as Styled from './style'

import { useSelector } from '../../../../hooks/redux/useSelector'

import Position from './Sections/lib/offensive/Position'
import GamesPlayed from './Sections/lib/offensive/GamesPlayed'
import AtBats from './Sections/lib/offensive/AtBats'
import BattingAverage from './Sections/lib/offensive/BattingAverage'
import OnBasePercentage from './Sections/lib/offensive/OnBasePercentage'
import OnBasePlusSlugging from './Sections/lib/offensive/OnBasePlusSlugging'
import Runs from './Sections/lib/offensive/Runs'
import Hits from './Sections/lib/offensive/Hits'
import Doubles from './Sections/lib/offensive/Doubles'
import Triples from './Sections/lib/offensive/Triples'
import HomeRuns from './Sections/lib/offensive/HomeRuns'
import RBI from './Sections/lib/offensive/RBI'
import Walks from './Sections/lib/offensive/Walks'
import Strikeouts from './Sections/lib/offensive/Strikeouts'
import StolenBases from './Sections/lib/offensive/StolenBases'
import CaughtStealing from './Sections/lib/offensive/CaughtStealing'
import HitByPitches from './Sections/lib/offensive/HitByPitches'

const Filters: React.FC = ({ ...props }) => {
    const activeDivision = useSelector(state => state.filters.division)
    const notJuco = activeDivision !== "juco"

    return (
        <Styled.Scrollable>
            <Styled.HR />
            {notJuco && <Position />}
            <GamesPlayed />
            <AtBats />
            <BattingAverage />
            <OnBasePercentage />
            <OnBasePlusSlugging />
            <Runs />
            <Hits />
            <Doubles />
            <Triples />
            <HomeRuns />
            <RBI />
            <Walks />
            <Strikeouts />
            <StolenBases />
            <CaughtStealing />
            {notJuco && <HitByPitches />}
        </Styled.Scrollable>
    )
}

export default Filters