import PitcherRangeSelector from '../../PitcherRangeSelector'

const HitRate: React.FC = () => (
    <PitcherRangeSelector
        title="H/9"
        filterKey="hRate"
        step={.1}
        toFixed={1}
    />
)

export default HitRate