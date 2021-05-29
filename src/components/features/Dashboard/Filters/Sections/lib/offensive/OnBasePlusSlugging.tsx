import OffensiveRangeSelector from '../../OffensiveRangeSelector'

const OneBasePlusSlugging: React.FC = () => (
    <OffensiveRangeSelector
        title="OPS"
        filterKey="onBasePlusSlugging"
        step={.001}
        toFixed={3}
    />
)

export default OneBasePlusSlugging