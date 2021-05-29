import PitcherRangeSelector from '../../PitcherRangeSelector'

const InningsPitched: React.FC = () => (
    <PitcherRangeSelector
        title="IP"
        filterKey="inningsPitched"
        step={1}
    />
)

export default InningsPitched