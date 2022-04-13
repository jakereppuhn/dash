import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              Dashboard
            </SidebarLink>
            <SidebarLink to="/income" onClick={toggle}>
              Income
            </SidebarLink>
            <SidebarLink to="/expense" onClick={toggle}>
              Expense
            </SidebarLink>
            <SidebarLink to="/networth" onClick={toggle}>
              Networth
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
