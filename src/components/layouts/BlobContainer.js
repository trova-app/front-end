import React from 'react'

import { useViewportDimensions } from '../../hooks/useViewportDimensions'
import SVG from '../svg'

const BlobContainer = ({ children }) => {
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
                    height: "90vh",
                    display: "flex",
                    alignItems: height / 1.59 > width ? "flex-start" : "center",
                    position: "absolute",
                    top: "5vh",
                    bottom: "5vh",
                    left: width < 650 ? "-40px" : 0,
                }}>
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
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                <div
                    style={{
                        width: height,
                        height: "100%",
                        marginTop: "0",
                        marginBottom: "0",
                        marginLeft: width < 1150 ? "20%" : "auto",
                        marginRight: "auto",
                    }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BlobContainer