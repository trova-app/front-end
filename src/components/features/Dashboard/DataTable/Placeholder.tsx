import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import SVG from '../../../svg'
import FullContainer from '../../../layouts/FullContainer'

const BlueP = styled.p`
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-weight: 700;
    font-size: 24px;
`

const GrayP = styled.p`
    color: ${colors.gray};
    font-family: "Nunito";
    font-weight: 700;
    font-size: 24px;
`

const Placeholder: React.FC = ({ ...props }) => {
    return (
        <FullContainer style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <BlueP>Oops...</BlueP>
            <SVG.TablePlaceholder
                style={{
                    width: "50%",
                    maxWidth: "500px",
                    margin: "24px 0"
                }}
            />
            <BlueP>No results found.</BlueP>
            <GrayP>Please try another search.</GrayP>

        </FullContainer>
    )
}

export default Placeholder