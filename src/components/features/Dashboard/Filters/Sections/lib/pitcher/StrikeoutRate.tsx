import PitcherRangeSelector from '../../PitcherRangeSelector'

const StrikeoutRate: React.FC = () => (
    <PitcherRangeSelector
        title="K%"
        filterKey="kRate"
        step={.01}
        toFixed={0}
        units="percentage"
    />
)

export default StrikeoutRate