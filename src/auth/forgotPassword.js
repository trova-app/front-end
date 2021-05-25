import { CognitoUser } from 'amazon-cognito-identity-js'
import Pool from './Pool'

export const initiateForgotPassword = (Username) => {
    return new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool })

        user.forgotPassword({
            onSuccess: (data) => resolve(data),
            onFailure: (err) => {
                console.log(err)
                reject(err)
            }
        })
    })
}

export const changeForgottenPassword = (Username, verificationCode, newPassword) => {
    return new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool })

        user.confirmPassword(verificationCode, newPassword, {
            onSuccess: () => resolve("Password has been changed."),
            onFailure: (err) => {
                console.log(err)
                reject(err)
            }
        })
    })
}