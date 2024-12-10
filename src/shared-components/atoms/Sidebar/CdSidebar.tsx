import React from "react";
import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

type SidebarProps = {
  isOpen: boolean;
  navItems: { id: string; navText: string; href: string }[];
};

const CdSideBar: React.FC<SidebarProps> = ({ isOpen, navItems }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">{/* Add header if needed */}</div>
      <div className="side-menu mt-5 pt-5">
        <Nav vertical className="list-unstyled pb-3">
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <Link className="nav-link" to={`/${item.href}`}>
                {item.navText}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default CdSideBar;
