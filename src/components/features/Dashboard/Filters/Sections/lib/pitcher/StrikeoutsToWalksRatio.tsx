import PitcherRangeSelector from '../../PitcherRangeSelector'

const StrikeoutsToWalksRatio: React.FC = () => (
    <PitcherRangeSelector
        title="K/BB"
        filterKey="soTObb"
        step={.1}
        toFixed={1}
    />
)

export default StrikeoutsToWalksRatio