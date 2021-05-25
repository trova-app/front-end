import { useEffect } from 'react'
import { getSession } from '../auth/getSession'
import { useDispatch } from './redux/useDispatch'

import { initialState, setTokens, setUserAttributes } from '../redux/slices/auth'

export const useSession = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        getSession()
            .then(({ session, attributes }) => {
                dispatch(setUserAttributes(attributes))
                dispatch(setTokens({
                    accessToken: {
                        jwtToken: session.accessToken.jwtToken,
                        payload: session.accessToken.payload
                    },
                    idToken: {
                        jwtToken: session.idToken.jwtToken,
                        payload: session.idToken.payload
                    },
                    refreshToken: {
                        token: session.refreshToken.token
                    }
                }))
            })
            .catch(err => {
                setUserAttributes(initialState.userAttributes)
                setTokens(initialState.tokens)
            })
    }, [dispatch])
}
