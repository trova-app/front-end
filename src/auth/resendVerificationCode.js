import { CognitoUser } from 'amazon-cognito-identity-js'
import Pool from './Pool'

export const resendVerificationCode = async (Username) => {
    let user = new CognitoUser({ Username, Pool })

    return await new Promise((resolve, reject) => {
        user.resendConfirmationCode((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}