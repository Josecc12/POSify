import { useDispatch, useSelector } from "react-redux"
import { setInventoryFilters, toggleMenu } from "../store/pos/posSlice";



export const usePosStore = () =>{

    const dispatch = useDispatch();

    const { isMenuOpen , inventoryFilters  } = useSelector(state=>state.pos);

    const onMenu = () =>{
        dispatch(toggleMenu());
    }

    const setInventoryFilter = (filterName, filterValue) => {
        const newFilters = {
          ...inventoryFilters,
          [filterName]: filterValue,
        };
        dispatch(setInventoryFilters(newFilters));
      };

    

    return{
        //Functions
        isMenuOpen,
        setInventoryFilter,

        //Variables
        onMenu, 
        inventoryFilters 

    }
}