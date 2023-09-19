import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth/authSlice";


export const useAuthStore = () =>{

    const dispatch = useDispatch();

    const { status , displayName} = useSelector(state=>state.auth);

    const onLogin = (user) =>{
        user.displayName = user.name;
        delete user.name;
        console.log(user)
        dispatch(login(user));
    }

    const onLogout = ()=>{
        dispatch(logout);
    }

    return{
        status,
        displayName,
        onLogin,
        onLogout,


    }
}