import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import Pool from '../../../../auth/Pool'
import { initialState as reduxAuthInitialState, setTokens, setUserAttributes } from '../../../../redux/slices/auth'
import { setSearchTerm } from '../../../../redux/slices/search'

import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import SVG from '../../../svg'

const Component: React.FC = ({ ...props }) => {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const idToken = useSelector(state => state.auth.tokens.idToken.payload)
    const dispatch = useDispatch()

    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
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
                                dispatch(setSearchTerm(""))
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
                dispatch(setTokens(reduxAuthInitialState.tokens))
                dispatch(setUserAttributes(reduxAuthInitialState.userAttributes))
                history.push("/login")
            }}>
                LOG OUT
            </Styled.Button>
        </Styled.Container>
    )
}

export default Component