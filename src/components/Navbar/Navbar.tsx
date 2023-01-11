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
//import { IconLookup, iconDefinition, findIconDefinitions }  from '@fortawesome/fontawesome-svg-core';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">{/* <NavIcon /> */}</NavLogo>
          <MobileMenu onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </MobileMenu>
          <NavMenu click={click}>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleClick}>
                HOME
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleClick}>
                SERVICIOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleClick}>
                QUIENES SOMOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleClick}>
                CLIENTES
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/" onClick={handleClick}>
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
