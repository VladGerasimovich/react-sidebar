import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const SidebarMenuLink = styled(Link)`
    background: #000;
    height: 80px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    padding: 20px;
    text-decoration: none;

    &:hover{
        border-left: 2px solid purple;
    }
`

export const SidebarMenuLabel = styled.span`
    margin-left: 15px;
    text-decoration: none;
`

