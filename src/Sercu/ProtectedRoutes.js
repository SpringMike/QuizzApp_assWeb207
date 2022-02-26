import {Outlet} from "react-router-dom";
import NotFound from "../NotFound";

const useAuth = () =>{
    const user = { isLogin: false,isAdmin:false}
    if (JSON.parse(localStorage.getItem("users")) !== null){
        user.isLogin = true

    }
    return user.isLogin
}

const ProtectedRoutes = () =>{
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <NotFound/>
}
export default ProtectedRoutes
