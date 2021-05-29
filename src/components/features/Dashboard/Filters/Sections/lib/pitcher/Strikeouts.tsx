import PitcherRangeSelector from '../../PitcherRangeSelector'

const Strikeouts: React.FC = () => (
    <PitcherRangeSelector
        title="SO"
        filterKey="strikeouts"
        step={1}
    />
)

export default Strikeouts