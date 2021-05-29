import PitcherRangeSelector from '../../PitcherRangeSelector'

const HitRate: React.FC = () => (
    <PitcherRangeSelector
        title="H%"
        filterKey="hRate"
        step={.1}
        toFixed={0}
        units="percentage"
    />
)

export default HitRate