import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../store/menu/menuSlice";



export const useMenuStore = () =>{

    const dispatch = useDispatch();

    const {  isMenuOpen   } = useSelector(state=>state.menu);

    const onMenu = () =>{
        dispatch(toggleMenu());
    }

   
      

    

    return{
       
        isMenuOpen,
        onMenu, 
        

    }
}