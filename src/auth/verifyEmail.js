import { CognitoUser } from 'amazon-cognito-identity-js'
import Pool from './Pool'

export const verifyEmail = async (code, Username, Password) => {
    let user = new CognitoUser({ Username, Pool })

    return await new Promise((resolve, reject) => {
        user.confirmRegistration(code, true, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve({ result, Username, Password })
            }
        })
    })
}