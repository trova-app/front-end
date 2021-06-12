import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const HitByPitches: React.FC = () => (
    <OffensiveRangeSelector
        title="HBP"
        filterKey="HP"
        step={1}
        toFixed={1}
    />
)

export default HitByPitches