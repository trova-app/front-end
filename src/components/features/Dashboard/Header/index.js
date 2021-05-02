import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import Pool from '../../../../auth/Pool'
import { setTokens, setUserAttributes } from '../../../../redux/slices/auth'
import { setSearchTerm } from '../../../../redux/slices/search'

import SVG from '../../../svg'

const Component = ({
    idToken,
    setTokens,
    setUserAttributes,
    setSearchTerm
}) => {
    const history = useHistory()
    const [search, setSearch] = useState("")

    const submitSearch = (e) => {
        e.preventDefault()
        setSearchTerm(search)
    }

    return (
        <Styled.Container>
            <SVG.TrovaLogo style={{ height: "75%" }} />
            <Styled.SearchForm onSubmit={(e) => submitSearch(e)}>
                <Styled.SearchInput
                    type="text"
                    placeholder="Search for a player or team"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Styled.SearchButton hasSearchTerm={!!search}>
                    <SVG.Search
                        style={{ width: "32px" }}
                        strokeColor={!!search ? colors.white : colors.lightBlue}
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
    { setTokens, setUserAttributes, setSearchTerm }
)(Component)