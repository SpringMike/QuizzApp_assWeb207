import {Outlet} from "react-router-dom";
import NotFound from "../NotFound";

const useAuth = () =>{
    const user1 = JSON.parse(localStorage.getItem("users"))
    const user = { isAdmin: false}
    if (user1 !== null && user1.role === 1){
        user.isAdmin = true
    }
    return user.isAdmin
}

const ProtectedRoutesWithROl = () =>{
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <NotFound/>
}
export default ProtectedRoutesWithROl
