import React from 'react'

const Line = ({ style, fill, stroke }) => {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 136 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M135.977 1.143H.189" stroke={fill || stroke} strokeWidth={2} />
        </svg>
    )
}

export default Line