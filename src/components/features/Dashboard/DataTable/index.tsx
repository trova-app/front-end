import { useState, useEffect } from 'react'

import { setData, setLastUpdated } from '../../../../redux/slices/data'
import { setDataRanges } from '../../../../redux/slices/filters'
import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import PitcherTable from './PitcherTable'
import OffensiveTable from './OffensiveTable'

const DataTable: React.FC = () => {
    const [fetching, setFetching] = useState(false)
    const data = useSelector(state => state.data.dataset)
    const filters = useSelector(state => state.filters)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const dispatch = useDispatch()

    useEffect(() => {
        if (data.length === 0 && token) {
            setFetching(true)
            fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/data`, {
                headers: {
                    "Authorization": `Bearer: ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    setFetching(false)
                    console.log(res.data);


                    const pitchersRanges = res.meta.ranges.pitchers
                    const hittersRanges = res.meta.ranges.hitters

                    dispatch(setLastUpdated({ date: res.meta.lastUpdated }))
                    dispatch(setDataRanges({
                        pitchers: {
                            appearances: pitchersRanges.APP,
                            walks: pitchersRanges.BB,
                            completeGames: pitchersRanges.CG,
                            earnedRuns: pitchersRanges.ER,
                            earnedRunAverage: pitchersRanges.ERA,
                            gamesStarted: pitchersRanges.GS,
                            hits: pitchersRanges.H,
                            hitByPitches: pitchersRanges.HP,
                            inningsPitched: pitchersRanges.IP,
                            losses: pitchersRanges.L,
                            opposingBattingAverage: pitchersRanges.OBA,
                            runs: pitchersRanges.R,
                            shutouts: pitchersRanges.SHO,
                            strikeouts: pitchersRanges.SO,
                            saves: pitchersRanges.SV,
                            wins: pitchersRanges.W,
                            wildPitches: pitchersRanges.WP,
                            bbRate: pitchersRanges.bbRate,
                            kRate: pitchersRanges.kRate,
                            hRate: pitchersRanges.hRate,
                            soTObb: pitchersRanges.soTObb
                        },
                        hitters: {
                            gamesPlayed: hittersRanges.GP,
                            atBats: hittersRanges.AB,
                            battingAverage: hittersRanges.AVG,
                            onBasePercentage: hittersRanges.OBP,
                            onBasePlusSlugging: hittersRanges.OPS,
                            runs: hittersRanges.R,
                            hits: hittersRanges.H,
                            doubles: hittersRanges["2B"],
                            triples: hittersRanges["3B"],
                            homeRuns: hittersRanges["HR"],
                            rbi: hittersRanges["RBI"],
                            walks: hittersRanges["BB"],
                            strikeouts: hittersRanges["SO"],
                            stolenBases: hittersRanges["SB"],
                            caughtStealing: hittersRanges["CS"],
                            hitByPitches: hittersRanges["HP"],
                        }
                    }))
                    dispatch(setData(res.data))
                })
        }
    }, [dispatch, token, data])

    if (fetching) return (
        <p style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -60%)" }}>Finding your data...</p>
    )

    if (filters.positions.P) {
        return <PitcherTable />
    } else {
        return <OffensiveTable />
    }
}


export default DataTable