import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ auth, component: Component, ...props }) => {
    if (auth.tokens === null) {
        return <Redirect to={{ pathname: "/login" }} />
    }

    return <Route
        render={(props) => <Component />}
    />
}

export default ProtectedRoute