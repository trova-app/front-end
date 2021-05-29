import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const BattingAverage: React.FC = () => (
    <OffensiveRangeSelector
        title="AVG"
        filterKey="battingAverage"
        step={.001}
        toFixed={3}
    />
)

export default BattingAverage