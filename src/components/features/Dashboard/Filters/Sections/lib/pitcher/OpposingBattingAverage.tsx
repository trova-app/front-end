import PitcherRangeSelector from '../../PitcherRangeSelector'

const OpposingBattingAverage: React.FC = () => (
    <PitcherRangeSelector
        title="OBA"
        filterKey="OBA"
        step={.001}
        toFixed={3}
    />
)

export default OpposingBattingAverage