import { Navigate, Outlet } from 'react-router-dom'
export default function PrivateRoutes() {
    return (
        localStorage.getItem('token') ? <Outlet /> : <Navigate to='/login' />
    )
}