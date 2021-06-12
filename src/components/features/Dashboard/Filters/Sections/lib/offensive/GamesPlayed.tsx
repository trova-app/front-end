import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const GamesPlayed: React.FC = () => (
    <OffensiveRangeSelector
        title="GP"
        filterKey="GP"
        step={1}
        toFixed={0}
    />
)

export default GamesPlayed