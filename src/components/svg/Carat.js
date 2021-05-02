import React from 'react'

const Carat = ({ style, fill }) => {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.061 6.475L5.716 1.82l4.655 4.655"
                stroke={fill}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Carat
