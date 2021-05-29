import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const StolenBases: React.FC = () => (
    <OffensiveRangeSelector
        title="SB"
        filterKey="stolenBases"
        step={1}
        toFixed={1}
    />
)

export default StolenBases