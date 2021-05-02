import React from 'react'

import * as Styled from './style'

import Position from './Sections/lib/Position'
import GamesPlayed from './Sections/lib/GamesPlayed'
import AtBats from './Sections/lib/AtBats'
import BattingAverage from './Sections/lib/BattingAverage'
import OnBasePercentage from './Sections/lib/OnBasePercentage'
import OnBasePlusSlugging from './Sections/lib/OnBasePlusSlugging'
import Runs from './Sections/lib/Runs'
import Hits from './Sections/lib/Hits'
import Doubles from './Sections/lib/Doubles'
import Triples from './Sections/lib/Triples'
import HomeRuns from './Sections/lib/HomeRuns'
import RBI from './Sections/lib/RBI'
import Walks from './Sections/lib/Walks'
import Strikeouts from './Sections/lib/Strikeouts'
import StolenBases from './Sections/lib/StolenBases'
import CaughtStealing from './Sections/lib/CaughtStealing'
import HitByPitches from './Sections/lib/HitByPitches'

const Filters = ({ ...props }) => {
    return (
        <Styled.Container>
            <Styled.Header>Filters</Styled.Header>
            <Position />
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
            <HitByPitches />
        </Styled.Container>
    )
}

export default Filters