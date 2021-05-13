import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
`

const FullScreen = ({
    backgroundColor,
    style,
    children
}) => {
    return (
        <Wrapper style={{
            backgroundColor,
            ...style
        }}>
            {children}
        </Wrapper>
    )
}

export default FullScreen