import React from 'react'

const TrovaLogo = ({ style }) => {
    return (
        <svg
            style={style || { width: "100%" }}
            viewBox="0 0 380 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M176.191 282.943L25.401 138.075c-6.834-6.566-8.185-17.076-2.704-24.806 92.609-130.607 253.412-119.546 335.179.136 5.246 7.679 3.801 17.957-2.906 24.4L203.903 282.943c-7.741 7.437-19.972 7.437-27.712 0z"
                fill="#4471D1"
                stroke="#4471D1"
                strokeWidth={37}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x={121.799}
                y={83.84}
                width={136.513}
                height={40.907}
                rx={20.453}
                fill="#fff"
            />
            <path
                d="M190.056 220.352c-11.296 0-20.453-9.157-20.453-20.453v-34.704c0-11.296 9.157-20.453 20.453-20.453 11.297 0 20.454 9.157 20.454 20.453v34.704c0 11.296-9.157 20.453-20.454 20.453z"
                fill="#638DE9"
            />
            <path
                d="M121.779 104.293c0-11.296 9.157-20.453 20.453-20.453h13.674c30.157 0 54.604 24.447 54.604 54.604v17.937c0 11.302-9.162 20.464-20.465 20.464-11.302 0-20.465-9.162-20.465-20.465v-17.976c0-7.543-6.114-13.657-13.657-13.657h-13.691c-11.296 0-20.453-9.158-20.453-20.454z"
                fill="#C0D2F9"
            />
            <path
                d="M288.372 172.817c3.202-10.008 4.93-20.675 4.93-31.746 0-57.483-46.599-104.083-104.083-104.083-57.483 0-104.083 46.6-104.083 104.083 0 57.484 46.6 104.083 104.083 104.083 29.271 0 55.719-12.082 74.63-31.532l56.913 55.761"
                stroke="#fff"
                strokeWidth={22}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default TrovaLogo