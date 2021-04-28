import React from 'react'
import PropTypes from 'prop-types'

import { useViewportDimensions } from '../../hooks/useViewportDimensions'
import SVG from '../svg'

const BlobContainer = ({ bannerComponent: BannerComponent, style, children }) => {
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
                    alignItems: height / 1.59 > width ? "flex-start" : "center",
                    position: "absolute",
                    bottom: "5vh",
                    left: width < 650 ? "-40px" : 0,
                }}>
                <SVG.TrovaLogo style={{
                    position: "fixed",
                    top: "2vh",
                    left: "5vw",
                    height: "10vh"
                }} />
                {BannerComponent}
                <SVG.Blob style={{
                    width: "100%",
                    minWidth: height * 1.59 || 0,
                    height: "100%",
                    zIndex: "-1",
                    overflow: "visible"
                }} />

            </div>
            <div
                style={{
                    width: "100vw",
                    height: "80vh",
                    position: "absolute",
                    bottom: "5vh"
                }}>
                <div
                    style={{
                        width: height,
                        height: "100%",
                        marginTop: "0",
                        marginBottom: "0",
                        marginLeft: width < 1150 ? "20%" : "auto",
                        marginRight: "auto",
                        ...style
                    }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

BlobContainer.propTypes = {
    bannerComponent: PropTypes.object.isRequired
}

export default BlobContainer