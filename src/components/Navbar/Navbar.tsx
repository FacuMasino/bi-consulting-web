import React, { useState } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
} from "./Navbar.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [IsNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!IsNavbarOpen);
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" />
          <MobileMenu onClick={handleNavbarClick}>
            {IsNavbarOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </MobileMenu>
          <NavMenu isOpen={IsNavbarOpen}>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleNavbarClick}>
                HOME
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleNavbarClick}>
                SERVICIOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleNavbarClick}>
                QUIENES SOMOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleNavbarClick}>
                CLIENTES
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleNavbarClick}>
                CONTACTO
              </NavMenuLink>
            </NavMenuItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
