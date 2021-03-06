import { useHistory } from 'react-router-dom'
import { colors } from '../../styles/colors'

import * as Styled from './style'
import FullScreen from '../../components/layouts/FullScreen'
import Signup from './components/Signup'
import DataUpload from './components/DataUpload'

const Admin: React.FC = () => {
    const history = useHistory()

    return (
        <FullScreen
            backgroundColor={colors.slateBlue}
            style={{ padding: "2%", overflowY: "auto" }}
        >
            <Styled.CloseButton onClick={() => history.push("/dashboard")}>Close</Styled.CloseButton>
            <DataUpload />
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

export default Admin