const Triangle = ({ style, fill }) => {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.077 7.874a1 1 0 001.52 0l5.138-6.007a1 1 0 00-.76-1.65H1.698a1 1 0 00-.76 1.65l5.139 6.007z"
                fill={fill}
            />
        </svg>
    )
}

export default Triangle