import { useDispatch } from './redux/useDispatch'
import { useSelector } from './redux/useSelector'

import { setDataRanges } from '../redux/slices/filters'
import { useGetPlayerDataQuery } from '../redux/api/dataApi'


export const useSetDataRanges = (isFetching: boolean) => {
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const activeDivision = useSelector(state => state.filters.division)
    const { data } = useGetPlayerDataQuery(activeDivision, { skip: !token })
    const dispatch = useDispatch()

    if (data && isFetching) {
        dispatch(setDataRanges({
            pitchers: data.meta.ranges.pitchers,
            hitters: data.meta.ranges.hitters
        }))
    }
}