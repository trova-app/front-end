import * as React from "react"

function SvgComponent({ style }) {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 2 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M.673.836v24.747"
                stroke="#4471D1"
                strokeWidth={5}
                strokeOpacity={0.45}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default SvgComponent
