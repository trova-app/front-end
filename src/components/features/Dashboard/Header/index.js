import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import Pool from '../../../../auth/Pool'
import { setTokens, setUserAttributes } from '../../../../redux/slices/auth'
import { setSearchTerm } from '../../../../redux/slices/search'
import { setData } from '../../../../redux/slices/data'

import SVG from '../../../svg'

const Component = ({
    idToken,
    setTokens,
    setUserAttributes,
    setSearchTerm,
    setData
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
                        style={{ width: "95%", position: "relative", left: "-2px" }}
                        strokeColor={!!search ? colors.white : colors.lightBlue}
                    />
                </Styled.SearchButton>
                {
                    search && <>
                        <SVG.SearchX style={{
                            position: "absolute",
                            top: "55%",
                            right: "7.5%",
                            transform: "translate(-7.5%, -55%)",
                            height: "24px",
                            cursor: "pointer"
                        }}
                            onClick={() => {
                                setSearch("")
                                setSearchTerm("")
                            }}
                        />
                        <SVG.SearchLine style={{
                            position: "absolute",
                            top: "55%",
                            right: "6%",
                            transform: "translate(-6%, -55%)",
                            height: "24px"
                        }} />
                    </>
                }
            </Styled.SearchForm>
            {idToken["custom:role"] === "admin" &&
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
                setData([])
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
    {
        setTokens,
        setUserAttributes,
        setSearchTerm,
        setData
    }
)(Component)