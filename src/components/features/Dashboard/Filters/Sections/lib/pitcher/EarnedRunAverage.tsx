import PitcherRangeSelector from '../../PitcherRangeSelector'

const EarnedRunAverage: React.FC = () => (
    <PitcherRangeSelector
        title="ERA"
        filterKey="earnedRunAverage"
        step={1}
        toFixed={2}
    />
)

export default EarnedRunAverage