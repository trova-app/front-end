import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "us-west-1_mritEtqcY",
    ClientId: "5dif8u66nbftc6mme3u2vm3mng"
}

export default new CognitoUserPool(poolData)