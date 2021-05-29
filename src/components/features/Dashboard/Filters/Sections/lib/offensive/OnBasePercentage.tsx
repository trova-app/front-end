import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const OnBasePercentage: React.FC = () => (
    <OffensiveRangeSelector
        title="OBP"
        filterKey="onBasePercentage"
        step={.001}
        toFixed={3}
    />
)

export default OnBasePercentage