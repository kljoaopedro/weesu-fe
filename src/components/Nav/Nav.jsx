import React, {useState} from "react";
import {HamburgerLines, HamburgerMenu, LogoWrapper, Menu, MenuWrapper, Navbar, NavItem} from "./Nav.styles";
import logoweesu from '../../assets/logoweesu.png';
import {openInAnotherTab} from "../../helper/redirect.helper";

function getMenuItens() {
    return [
        {id: 1, label: 'Quem somos', redirectTo: 'https://weesu.com.br/#quem-somos"'},
        {id: 2, label: 'Integrações', redirectTo: 'https://weesu.com.br/#integracoes'}
    ];
}

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar>
            <LogoWrapper>
                <img src={logoweesu} alt="Logotipo"/>
            </LogoWrapper>
            <MenuWrapper>
                <Menu>
                    {getMenuItens().map(menuOption => (
                        <NavItem
                            id={menuOption.id}
                            onClick={() => openInAnotherTab(menuOption.redirectTo)}
                        >
                            {menuOption.label}
                        </NavItem>
                    ))}
                </Menu>
            </MenuWrapper>
            <HamburgerMenu onClick={() => setMenuOpen(!isMenuOpen)}>
                <HamburgerLines />
                <HamburgerLines />
                <HamburgerLines />
            </HamburgerMenu>
        </Navbar>
    );
}

export default Nav;