import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../store/pos/posSlice";



export const usePosStore = () =>{

    const dispatch = useDispatch();

    const { isMenuOpen } = useSelector(state=>state.pos);

    const onMenu = () =>{
    
        dispatch(toggleMenu());
    }

    

    return{
        isMenuOpen,
        onMenu

    }
}