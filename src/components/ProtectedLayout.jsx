const ProtectedLayout = () => {
    return (
        <div>
            {isAuthenticated ? < /> : <Navigate to="/login" />}
        </div>
    )
}

export default ProtectedLayout