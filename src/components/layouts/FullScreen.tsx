import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
`

type Props = {
    backgroundColor?: string,
    style?: {},
    children: React.ReactNode
}

const FullScreen: React.FC<Props> = ({
    backgroundColor,
    style,
    children
}) => (
    <Wrapper style={{
        backgroundColor,
        ...style
    }}>
        {children}
    </Wrapper>
)

export default FullScreen