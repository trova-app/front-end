import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Home: React.FC = ({ ...props }) => {
    let history = useHistory()

    useEffect(() => {
        history.push("/login")
    }, [history])

    return (
        <div className="">
            Make something great with the Home component here!
        </div>
    )
}

export default Home