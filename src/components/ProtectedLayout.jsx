import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { stateContext } from "../App"

const ProtectedLayout = () => {
    const { isAuthenticated } = useContext(stateContext)

    return (
        <div>
            {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default ProtectedLayout