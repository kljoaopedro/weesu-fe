import styled from 'styled-components';
import {WEESU_BLUE} from "../../helper/color.helpers";

export const Navbar = styled.nav`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  & img {
    height: auto;
    @media (max-width: 400px) {
      width: 216px;
    } 
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const HamburgerLines = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${WEESU_BLUE};
  margin: 6px 0;
`;

export const NavItem = styled.li`
  cursor: pointer;
`;