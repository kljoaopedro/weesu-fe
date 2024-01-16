import React, {useCallback, useState} from "react";
import {HamburgerLines, HamburgerMenu, LogoWrapper, Menu, MenuWrapper, Navbar, NavItem} from "./Nav.styles";
import logoweesu from '../../assets/logoweesu.png';
import {openInAnotherTab} from "../../helper/redirect.helper";
import {useNavigate} from "react-router-dom";

function getMenuItens() {
    return [
        {id: 1, label: 'Quem somos', redirectTo: 'https://weesu.com.br/#quem-somos"'},
        {id: 2, label: 'Integrações', redirectTo: 'https://weesu.com.br/#integracoes'}
    ];
}

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const onClickLogoHandler = useCallback(() => {
            navigate('/');
    }, [navigate]);

    return (
        <Navbar>
            <LogoWrapper onClick={onClickLogoHandler}>
                <img src={logoweesu} alt="Logotipo"/>
            </LogoWrapper>
            <MenuWrapper>
                <Menu>
                    {getMenuItens().map(menuOption => (
                        <NavItem
                            key={menuOption.id}
                            onClick={() => openInAnotherTab(menuOption.redirectTo)}
                        >
                            {menuOption.label}
                        </NavItem>
                    ))}
                </Menu>
            </MenuWrapper>
            <HamburgerMenu onClick={() => setMenuOpen(!isMenuOpen)}>
                <HamburgerLines/>
                <HamburgerLines/>
                <HamburgerLines/>
            </HamburgerMenu>
        </Navbar>
    );
}

export default Nav;