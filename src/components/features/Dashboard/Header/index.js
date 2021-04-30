import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import Pool from '../../../../auth/Pool'
import { setTokens, setUserAttributes } from '../../../../redux/slices/auth'

import SVG from '../../../svg'

const Component = ({ idToken, setTokens, setUserAttributes }) => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")

    const submitSearch = (e) => {
        e.preventDefault()

        console.log(searchTerm)
    }

    return (
        <Styled.Container>
            <SVG.TrovaLogo style={{ height: "75%" }} />
            <Styled.SearchForm onSubmit={(e) => submitSearch(e)}>
                <Styled.SearchInput
                    type="text"
                    placeholder="Search for a player, position, or team"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Styled.SearchButton hasSearchTerm={!!searchTerm}>
                    <SVG.Search
                        style={{ width: "32px" }}
                        strokeColor={!!searchTerm ? colors.white : colors.lightBlue}
                    />
                </Styled.SearchButton>
            </Styled.SearchForm>
            {idToken["cognito:groups"].includes("Admin") &&
                <Styled.Button
                    onClick={() => history.push("/admin")}
                    style={{ marginRight: "2%" }}
                >
                    ADMIN
            </Styled.Button>}
            <Styled.Button onClick={() => {
                const user = Pool.getCurrentUser()
                if (user) {
                    user.signOut()
                }
                setTokens(null)
                setUserAttributes(null)
                history.push("/login")
            }}>
                LOG OUT
            </Styled.Button>
        </Styled.Container>
    )
}

export default connect(
    state => ({
        idToken: state.auth.tokens.idToken.payload
    }),
    { setTokens, setUserAttributes }
)(Component)