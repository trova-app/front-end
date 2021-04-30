import React from 'react'

const Search = ({ style, strokeColor }) => {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.58 19.515c4.823 0 8.732-3.582 8.732-8 0-4.419-3.909-8-8.731-8-4.823 0-8.732 3.581-8.732 8 0 4.418 3.91 8 8.732 8zM23.495 21.515l-4.748-4.35"
                stroke={strokeColor || "#4471D1"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Search