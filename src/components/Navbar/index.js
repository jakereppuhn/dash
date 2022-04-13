import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home">Dash</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link to="/" className="link">
                Dashboard
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/income" className="link">
                Income
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/expenses" className="link">
                Expense
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/networth" className="link">
                Networth
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
