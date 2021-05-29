import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const Strikeouts: React.FC = () => (
    <OffensiveRangeSelector
        title="SO"
        filterKey="strikeouts"
        step={1}
        toFixed={1}
    />
)

export default Strikeouts