import React from 'react'

const Blob = ({ style }) => {
    return (
        <svg style={style || { width: "100%" }} viewBox="0 0 868 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b)">
                <path style={{ filter: "drop-shadow(0 0 20px rgba(69, 120, 226, 1))" }} d="M712.553 337.833C657.937 383.346 703.392 440.232 624.128 487.474C584.476 511.107 504.747 465.949 426.874 487.474C349 509 342.127 555.963 300.88 555.963H28.2326C12.7686 555.963 0.351257 543.427 0.351257 527.963V28.031C0.351257 12.567 12.8873 0.0309627 28.3513 0.0309624L839.106 0.0309448C859.473 0.0309448 873.203 21.1386 865.53 40.0044C852.523 71.9837 836.262 115.806 832.719 142.846C826.621 189.39 845.453 263.869 819.116 294.754C783.556 336.455 743.929 311.686 712.553 337.833Z" fill="url(#paint0_linear)" fillOpacity="0.73" />
            </g>
            <defs>
                <filter id="filter0_b" x="-99.6487" y="-99.9691" width="1067.34" height="755.932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="50" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="0.351257" y1="0.0309448" x2="460.024" y2="507.585" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D6E2FF" stopOpacity="0.57" />
                    <stop offset="1" stopColor="#4471D1" />
                </linearGradient>
            </defs>
        </svg>


    )
}

export default Blob
