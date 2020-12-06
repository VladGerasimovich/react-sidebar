import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'


export const NavWrapper = styled.div`
    height: 80px;
    background: #000;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const NavBtn = styled(BiMenu)`
    cursor: pointer;
    color: #fff;
    font-size: 36px;
`
