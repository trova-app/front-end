import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from './Pool'

export const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool })
        const authDetails = new AuthenticationDetails({ Username, Password })

        user.authenticateUser(authDetails, {
            onSuccess: async (session) => {
                const attributes = await new Promise((resolve, reject) => {
                    user.getUserAttributes((err, attributes) => {
                        if (err) {
                            reject(err)
                        } else {
                            const results = {}

                            for (let attribute of attributes) {
                                const { Name, Value } = attribute
                                results[Name] = Value
                            }
                            resolve(results)
                        }
                    })
                })
                resolve({ session, attributes })
            },
            onFailure: (err) => {
                reject(err)
            },
            newPasswordRequired: (data) => {
                reject(data)
            },
        })
    })
}