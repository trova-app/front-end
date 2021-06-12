import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const Strikeouts: React.FC = () => (
    <OffensiveRangeSelector
        title="SO"
        filterKey="SO"
        step={1}
        toFixed={1}
    />
)

export default Strikeouts