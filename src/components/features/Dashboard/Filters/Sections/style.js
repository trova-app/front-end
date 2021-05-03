import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

export const Container = styled.div`
    padding-left: 8px;
    padding-right: 12px;
    padding-bottom: ${props => props.isOpen ? "8px" : "0"};
    border-bottom: 1px solid ${colors.gray};
`

export const Header = styled.div`
    position: relative;
    padding: 10px 0;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 22px;
    cursor: pointer;
    user-select: none;
`