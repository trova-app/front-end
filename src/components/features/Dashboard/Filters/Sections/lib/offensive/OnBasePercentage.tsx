import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const OnBasePercentage: React.FC = () => (
    <OffensiveRangeSelector
        title="OBP"
        filterKey="OBP"
        step={.001}
        toFixed={3}
    />
)

export default OnBasePercentage