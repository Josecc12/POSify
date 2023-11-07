import { useDispatch, useSelector } from "react-redux"
import { onLoadCategories, onLoadEmployees, onLoadProducts, onLoadRoles, onLogin, onLogout, setInventoryFilters, toggleMenu } from "../store/pos/posSlice";



export const usePosStore = () => {

  const dispatch = useDispatch();

  const { isMenuOpen, inventoryFilters, roles,
          categories, employees, products ,
          status , name , token
        } = useSelector(state => state.pos);

  
  const startLogin = async (email,password) => {

    const data = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());

    dispatch(onLogin(data));
  }

  const logout = () => {
    dispatch(onLogout());

  }

  const onMenu = () => {
    dispatch(toggleMenu());
  }

  const setInventoryFilter = (filterName, filterValue) => {
    const newFilters = {
      ...inventoryFilters,
      [filterName]: filterValue,
    };
    dispatch(setInventoryFilters(newFilters));
  };


  const statrtLoadingRole = async () => {

    const data = await fetch('http://localhost:3000/api/role/').then(res => res.json());

    dispatch(onLoadRoles(data));

  }

  const startLoadingCategories = async () => {

    const data = await fetch('http://localhost:3000/api/category/').then(res => res.json());

    dispatch(onLoadCategories(data));

  }

  const startSavingCategory = async (category) => {



    const data = await fetch('http://localhost:3000/api/category/new', {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());

  }

  const startLoadingEmployees = async () => {


    const data = await fetch('http://localhost:3000/api/employee/').then(res => res.json());

    dispatch(onLoadEmployees(data));

  }

  const startSavingEmployee = async (employee) => {

    const data = await fetch('http://localhost:3000/api/employee/new', {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());

  }


  const startLoadingInventory = async () => {

    const data = await fetch('http://localhost:3000/api/products/').then(res => res.json());
    dispatch(onLoadProducts(data));

  }

  const startSavingProduct = async (product) => {

    const data = await fetch('http://localhost:3000/api/products/new', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());

  }


  return {
    //Functions
    isMenuOpen,
    setInventoryFilter,



    //Variables
    onMenu,
    roles,
    categories,
    employees,
    products,
    status,
    name,
    token,

    inventoryFilters,
    startLogin,
    logout,
    statrtLoadingRole,
    startLoadingCategories,
    startSavingCategory,
    startLoadingEmployees,
    startSavingEmployee,
    startLoadingInventory,
    startSavingProduct,

  }
}