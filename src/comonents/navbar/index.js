import React from 'react'
import { NavBtn, NavWrapper } from './navbarElements'

const Navbar = ({openMenu}) => {
    return (
        <>
            <NavWrapper>
                <NavBtn onClick={openMenu}/>
            </NavWrapper>
        </>
    )
}

export default Navbar
