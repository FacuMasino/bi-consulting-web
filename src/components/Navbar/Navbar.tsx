import React, { useState, useEffect } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

  const updateNavBg = () => {
    if (window.scrollY >= 90) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNavBg);
  }, []);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!IsNavbarOpen);
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo
            isScrolling={isScrolling}
            to="home"
            smooth={true}
            duration={500}
          />
          <MobileMenu onClick={handleNavbarClick}>
            {IsNavbarOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </MobileMenu>
          <NavMenu isOpen={IsNavbarOpen}>
            <NavMenuItem>
              <NavMenuLink
                to="home"
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="active"
                spy={true}
                onClick={handleNavbarClick}
              >
                HOME
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                to="services"
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="active"
                spy={true}
                onClick={handleNavbarClick}
              >
                SERVICIOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                to="about"
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="active"
                spy={true}
                onClick={handleNavbarClick}
              >
                QUIENES SOMOS
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                to="clients"
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="active"
                spy={true}
                onClick={handleNavbarClick}
              >
                CLIENTES
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="active"
                spy={true}
                onClick={handleNavbarClick}
              >
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
