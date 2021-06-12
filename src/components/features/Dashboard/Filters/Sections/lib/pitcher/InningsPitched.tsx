import PitcherRangeSelector from '../../PitcherRangeSelector'

const InningsPitched: React.FC = () => (
    <PitcherRangeSelector
        title="IP"
        filterKey="IP"
        step={1}
        toFixed={1}
    />
)

export default InningsPitched