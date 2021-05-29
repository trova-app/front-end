import PitcherRangeSelector from '../../PitcherRangeSelector'

const WalkRate: React.FC = () => (
    <PitcherRangeSelector
        title="BB%"
        filterKey="bbRate"
        step={.1}
        toFixed={0}
        units="percentage"
    />
)

export default WalkRate