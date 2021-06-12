import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const HomeRuns: React.FC = () => (
    <OffensiveRangeSelector
        title="HR"
        filterKey="HR"
        step={1}
        toFixed={1}
    />
)

export default HomeRuns