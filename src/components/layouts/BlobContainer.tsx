import { useViewportDimensions } from '../../hooks/useViewportDimensions'
import SVG from '../svg'

interface Props {
    bannerComponent: React.FC | JSX.Element,
    style: {},
    children: React.ReactNode
}

const BlobContainer: React.FC<Props> = ({
    bannerComponent: BannerComponent,
    style,
    children
}) => {
    const { width, height } = useViewportDimensions()

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: "100vw",
                    height: "80vh",
                    display: "flex",
                    alignItems: height && width && height / 1.59 > width ? "flex-start" : "center",
                }}>
                <SVG.TrovaLogo style={{
                    position: "fixed",
                    top: "2vh",
                    left: "5vw",
                    height: "10vh"
                }} />
                {BannerComponent}
                <SVG.Blob style={{
                    width: "100vw",
                    minWidth: height ? height * 1.59 : 0,
                    height: "80vh",
                    zIndex: "-1",
                    overflow: "visible",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }} />

            </div>
            <div
                style={{
                    width: "100vw",
                    height: "80vh",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                <div
                    style={{
                        width: height,
                        maxWidth: width,
                        height: "100%",
                        padding: "0 20px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        ...style
                    }}>
                    <>{children}</>
                </div>
            </div>
        </div>
    )
}

export default BlobContainer