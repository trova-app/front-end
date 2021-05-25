import { CognitoUserPool } from 'amazon-cognito-identity-js'

interface PoolDataInterface {
    UserPoolId: string,
    ClientId: string,
}

const poolData: PoolDataInterface = {
    UserPoolId: process.env.REACT_APP_AWS_USER_POOL || "",
    ClientId: process.env.REACT_APP_AWS_USER_CLIENT_ID || ""
}

export default new CognitoUserPool(poolData)