import { useEffect } from 'react'
import { getSession } from '../auth/getSession'

export const useSession = (setTokens, setUserAttributes) => {
    useEffect(() => {
        getSession()
            .then(({ session, attributes }) => {
                setUserAttributes(attributes)
                setTokens({
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
                })
            })
            .catch(err => {
                setUserAttributes(null)
                setTokens(null)
            })
    }, [setTokens, setUserAttributes])
}
