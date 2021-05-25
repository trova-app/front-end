import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TokensPayloadInterface {
    accessToken: {
        jwtToken: string,
        payload: {
            sub: string,
            event_id: string,
            token_use: string,
            scope: string,
            auth_time: number,
            iss: string,
            exp: number,
            iat: number,
            jti: string,
            client_id: string,
            username: string
        }
    },
    idToken: {
        jwtToken: string,
        payload: {
            sub: string,
            aud: string,
            email_verified: boolean,
            event_id: string,
            token_use: string,
            auth_time: number,
            iss: string,
            'cognito:username': string,
            exp: number,
            'custom:role': string,
            iat: number,
            email: string
        }
    },
    refreshToken: {
        token: string
    }
}

interface UserAttributesInterface {
    sub: string,
    email_verified: string,
    'custom:role': string,
    email: string
}

export const initialState = {
    tokens: {
        accessToken: {
            jwtToken: "",
            payload: {
                sub: "",
                event_id: "",
                token_use: "",
                scope: "",
                auth_time: 0,
                iss: "",
                exp: 0,
                iat: 0,
                jti: "",
                client_id: "",
                username: ""
            }
        },
        idToken: {
            jwtToken: "",
            payload: {
                sub: "",
                aud: "",
                email_verified: false,
                event_id: "",
                token_use: "",
                auth_time: 0,
                iss: "",
                'cognito:username': "",
                exp: 0,
                'custom:role': "",
                iat: 0,
                email: ""
            }
        },
        refreshToken: {
            token: ""
        }
    },
    userAttributes: {
        sub: "",
        email_verified: "",
        'custom:role': "",
        email: ""
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokens: (state, action: PayloadAction<TokensPayloadInterface>) => {
            state.tokens = action.payload
        },
        setUserAttributes: (state, action: PayloadAction<UserAttributesInterface>) => {
            state.userAttributes = action.payload
        }
    }
})

export const {
    setTokens,
    setUserAttributes
} = authSlice.actions

export default authSlice.reducer