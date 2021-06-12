import PitcherRangeSelector from '../../PitcherRangeSelector'

const EarnedRunAverage: React.FC = () => (
    <PitcherRangeSelector
        title="ERA"
        filterKey="ERA"
        step={1}
        toFixed={2}
    />
)

export default EarnedRunAverage