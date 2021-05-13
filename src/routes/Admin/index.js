import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { colors } from '../../styles/colors'

import * as Styled from './style'
import FullScreen from '../../components/layouts/FullScreen'
import Signup from './components/Signup'

const Admin = () => {
    const history = useHistory()

    return (
        <FullScreen
            backgroundColor={colors.slateBlue}
            style={{ padding: "2%", overflowY: "auto" }}
        >
            <Styled.CloseButton onClick={() => history.push("/dashboard")}>Close</Styled.CloseButton>
            <Signup
                header="Add an ADMINISTRATOR (CAREFUL!!!)"
                role="admin"
            />
            <Signup
                header="Add a USER"
                role="user"
            />
        </FullScreen>
    )
}

export default connect(
    null,
    null
)(Admin)