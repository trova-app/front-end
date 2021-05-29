import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const GamesPlayed: React.FC = () => (
    <OffensiveRangeSelector
        title="GP"
        filterKey="gamesPlayed"
        step={1}
        toFixed={1}
    />
)

export default GamesPlayed