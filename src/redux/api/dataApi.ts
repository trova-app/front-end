import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FETCH_BASE_URI,
        prepareHeaders: (headers, { getState }: any) => {
            const token = getState().auth.tokens.idToken.jwtToken

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getPlayerData: builder.query({
            query: (division) => `/data?division=${division}`
        })
    })
})

export const { useGetPlayerDataQuery } = dataApi