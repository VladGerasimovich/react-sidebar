import styled from 'styled-components'
import { MdClose} from 'react-icons/md'


export const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background: #000;
    transition: all .75s;
`

export const SidebarClose = styled(MdClose)`
    color: #fff;
    cursor: pointer;
    padding: 30px 20px 20px;
    font-size: 30px;
`


