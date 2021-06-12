import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const AtBats: React.FC = () => (
    <OffensiveRangeSelector
        title="AB"
        filterKey="AB"
        step={5}
        toFixed={1}
    />
)

export default AtBats