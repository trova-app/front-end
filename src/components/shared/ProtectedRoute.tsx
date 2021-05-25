import { Route, Redirect } from 'react-router-dom'

interface Props {
    path: string,
    auth: {
        tokens?: {}
    }
    component: React.FC
}

const ProtectedRoute: React.FC<Props> = ({
    auth,
    component: Component,
}) => {
    if (auth.tokens === null) {
        return <Redirect to={{ pathname: "/login" }} />
    }

    return <Route
        render={(props) => <Component />}
    />
}

export default ProtectedRoute