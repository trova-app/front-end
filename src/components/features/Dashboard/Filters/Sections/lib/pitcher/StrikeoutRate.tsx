import PitcherRangeSelector from '../../PitcherRangeSelector'

const StrikeoutRate: React.FC = () => (
    <PitcherRangeSelector
        title="K/9"
        filterKey="kRate"
        step={.01}
        toFixed={1}
    />
)

export default StrikeoutRate