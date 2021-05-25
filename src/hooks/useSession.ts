import { useEffect } from 'react'
import { getSession } from '../auth/getSession'
import { useDispatch } from './redux/useDispatch'

import { initialState, setTokens, setUserAttributes } from '../redux/slices/auth'

export const useSession = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        getSession()
            .then((value: any) => {
                dispatch(setUserAttributes(value.attributes))
                dispatch(setTokens({
                    accessToken: {
                        jwtToken: value.session.accessToken.jwtToken,
                        payload: value.session.accessToken.payload
                    },
                    idToken: {
                        jwtToken: value.session.idToken.jwtToken,
                        payload: value.session.idToken.payload
                    },
                    refreshToken: {
                        token: value.session.refreshToken.token
                    }
                }))
            })
            .catch(err => {
                setUserAttributes(initialState.userAttributes)
                setTokens(initialState.tokens)
            })
    }, [dispatch])
}
