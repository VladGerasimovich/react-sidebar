import React from 'react'
import {SidebarClose, SidebarWrapper} from './sidebarElements'
import { SidebarData } from './sidebarData'
import SidebarMenu from './sidebarmenu/index'


const Sidebar = ({showMenu, openMenu}) => {
    return (
        <>
            <SidebarWrapper showMenu={showMenu}>
                <SidebarClose onClick={openMenu}/>
                {SidebarData.map((item, index) => {
                    return <SidebarMenu item={item} key={index} openMenu={openMenu}/>
                })}
            </SidebarWrapper>
        </>
    )
}

export default Sidebar
