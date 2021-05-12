import FullScreen from '../components/layouts/FullScreen'
import SVG from '../components/svg'
import { colors } from '../styles/colors'

const MobileViewWarning = ({ ...props }) => {
    return (
        <FullScreen style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.slateBlue
        }}>
            <SVG.TrovaLogo style={{ width: "50%" }} />
            <div style={{ padding: "7%" }}>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Welcome to Trova!</p>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Sorry, but we aren't supporting screens this small yet.</p>
                <p style={{ color: colors.white, fontFamily: "Nunito" }}>Revisit us on a laptop or computer!</p>
            </div>
        </FullScreen>
    )
}

export default MobileViewWarning