import React from 'react'
import { Wrapper, Container, LogoContainer, Menu, MenuItem, MenuItemLink } from './navbar.elements'
import { FaJediOrder } from "react-icons/fa";
import {IconContext} from 'react-icons'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <IconContext.Provider value={{style: {fontSize: "2em"}}}>

            <LogoContainer>
                <FaJediOrder />
                <p>Siglo 21</p>
            </LogoContainer>
            
            <Menu>
                <MenuItem>
                    <MenuItemLink>INICIO</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>SOBRE NOSOTROS</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>SHOP</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>CONTACTENOS</MenuItemLink>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar

