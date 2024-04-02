import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const user=localStorage.getItem('token')
   return (user && user.role==="admin") ? <Outlet/> : <Navigate to="/login"/> 
}

export default PrivateRoute