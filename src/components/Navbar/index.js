import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dash</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/income">Income</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="expenses">Expenses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="networth">Networth</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/#">Login</NavBtnLink>
            <NavBtnLink to="/#">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
