import React, { useMemo, useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { SideberSubItem } from './SideberSubItem';

import { useNavigate } from 'react-router-dom';

export const SidebarItem = ({ icon, text, subMenu ,to }) => {

    

    const [isDrop, setIsDrop] = useState(false)
    const  navigate = useNavigate()


   

    const onButton = () =>{

        if(subMenu){
            setIsDrop(!isDrop)  
        }
        else{
            console.log('nav')
            navigate(to)
        }
        
    }


    

    return (
        <div className="menu-item">
            <a className="flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-slate-700 hover:text-white" href="#" onClick={onButton}>
                {icon}
                <span className="mx-4 font-medium">{text}</span>

                {subMenu && <MdExpandMore  />}

            </a>

            {subMenu && <SideberSubItem visible={isDrop} items={subMenu} />}

        </div>
    )
}
