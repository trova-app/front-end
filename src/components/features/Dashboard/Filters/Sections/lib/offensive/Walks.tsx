import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const Walks: React.FC = () => (
    <OffensiveRangeSelector
        title="BB"
        filterKey="walks"
        step={1}
        toFixed={1}
    />
)

export default Walks