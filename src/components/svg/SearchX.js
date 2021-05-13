import * as React from "react"

function SvgComponent({ style }) {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.224 1.363l-4.87 4.87-4.627-4.627c-.511-.51-1.362-.489-1.9.049-.537.537-.56 1.388-.048 1.9L5.405 8.18l-4.87 4.87c-.538.538-.56 1.389-.049 1.9.511.51 1.362.489 1.9-.05l4.87-4.87 4.627 4.627c.51.511 1.362.49 1.9-.048.537-.538.559-1.389.048-1.9L9.204 8.084l4.87-4.87c.538-.538.56-1.39.05-1.9-.512-.51-1.363-.49-1.9.049z"
                fill="#4471D1"
                fillOpacity={0.45}
            />
        </svg>
    )
}

export default SvgComponent