import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const RBI: React.FC = () => (
    <OffensiveRangeSelector
        title="RBI"
        filterKey="rbi"
        step={1}
        toFixed={1}
    />
)

export default RBI