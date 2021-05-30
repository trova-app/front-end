import PitcherRangeSelector from '../../PitcherRangeSelector'

const WalkRate: React.FC = () => (
    <PitcherRangeSelector
        title="BB/9"
        filterKey="bbRate"
        step={.1}
        toFixed={1}
    />
)

export default WalkRate