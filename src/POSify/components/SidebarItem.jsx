import React, { useEffect, useState } from 'react'
import { MdExpandMore } from "react-icons/md";
import { SideberSubItem } from './SideberSubItem'
import { useMenuStore } from '../../hooks/useMenu';

export const SidebarItem = ({ icon, text, subMenu }) => {

    const { onSubMenu , collapsedMenus } = useMenuStore();

    const [isVisible, setIsVisible] = useState('')

    const onItem = ()=>{
        if (subMenu) {
            onSubMenu(text);
        }
        else{
            //TODO: Navigate to Page
            console.log(text)
        }
    }

    useEffect(() => {
        setIsVisible(collapsedMenus.includes(text) ? '' : 'hidden');
    }, [collapsedMenus, text]);
    

    return (
        <div className="menu-item">
            <a className="flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-slate-700 hover:text-white" href="#" onClick={onItem}>
                {icon}
                <span className="mx-4 font-medium">{text}</span>

                {subMenu && <MdExpandMore  />}

            </a>

            {subMenu && <SideberSubItem visible={isVisible} items={subMenu} />}

        </div>
    )
}
