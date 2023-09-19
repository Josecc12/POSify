import { useDispatch, useSelector } from "react-redux"
import { toggleMenu , setSubMenu , removeSubMenu} from "../store/menu/menuSlice";



export const useMenuStore = () =>{

    const dispatch = useDispatch();

    const {  isMenuOpen , collapsedMenus  } = useSelector(state=>state.menu);

    const onMenu = () =>{
        dispatch(toggleMenu());
    }

    const onSubMenu = (submenu) => {
        
        collapsedMenus.includes(submenu) 
          ? dispatch(removeSubMenu(submenu))
          : dispatch(setSubMenu(submenu));
      }
      

    

    return{
        collapsedMenus,
        isMenuOpen,
        onMenu, 
        onSubMenu

    }
}