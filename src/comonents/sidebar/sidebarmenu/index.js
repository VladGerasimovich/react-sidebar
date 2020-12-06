import React from 'react'
import { SidebarMenuLink, SidebarMenuLabel } from './sidebarmenuElements'


const SidebarMenu = ({item, index, openMenu}) => {
    return (
        <>
            <SidebarMenuLink to={item.path} key={index} onClick={openMenu}>
                <div>
                    {item.icon}
                    <SidebarMenuLabel>{item.title}</SidebarMenuLabel>
                </div>
            </SidebarMenuLink>
        </>
    )
}

export default SidebarMenu
