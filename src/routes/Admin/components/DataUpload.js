import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Styled from '../style'

const DataUpload = ({ ...props }) => {
    const idToken = useSelector(state => state.auth.tokens.idToken.jwtToken)
    const [input, setInput] = useState(undefined)
    const [fileUploadName, setFileUploadName] = useState("")
    const [working, setWorking] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChange = (e) => {
        setFileUploadName(e.target.files[0].name)
        setInput(e.target.files[0])
    }

    const upload = (e) => {
        e.preventDefault();
        setWorking(true)

        const data = new FormData()
        data.append('players.json', input)

        fetch(`${process.env.REACT_APP_FETCH_BASE_URI}/data`,
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer: ${idToken}`
                },
                body: input
            }
        )
            .then(res => res.json())
            .then(res => {
                setWorking(false)
                setSuccess(true)
            })
            .catch(err => console.error(err))
    }

    return (
        <Styled.Form onSubmit={upload}>
            <Styled.Header>Upload New Data (MUST BE VALID JSON)</Styled.Header>
            <Styled.FileUploadLabel htmlFor="file">Browse files...</Styled.FileUploadLabel>
            <input id="file" type="file" name="file" onChange={onChange} style={{ display: "none" }} />
            {fileUploadName && <Styled.FileUploadName>{fileUploadName}</Styled.FileUploadName>}
            <Styled.SubmitButton disabled={working || !input}>{working ? "Working on it..." : "Upload"}</Styled.SubmitButton>
            {success && <Styled.UploadSuccess>Success!</Styled.UploadSuccess>}
        </Styled.Form>
    )
}

export default DataUpload