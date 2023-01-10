import styled from "styled-components";
import { Container, Colors } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

export interface NavMenuProps {
  click: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top:0;
  background: #fff;
  color: ${Colors.primary.blue};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  width: 100%;
`;

export const NavBarContainer = styled(Container)`
	display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  @media screen and (max-width: 960px) {
    height: 60px;
  }
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 263px;
  height: 70px;
  @media screen and (max-width: 960px) {
    width: 200px;
    height: 50px;
  }
`;

// Menu hamburguesa
export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    color: ${Colors.primary.blue};
    height: 40px;
    font-size: 1.8rem;
  }
`;

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    background-color: ${Colors.neutral.lightBlue};
    width: 100%;
    height: calc(100vh - 60px);
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0:'-100%')};
    transition: all 0.5s ease;
    font-size: 1.8rem;
    z-index: 0;
  }
`;

export const NavMenuItem = styled.li`
  &:nth-child(2n+1) {
      padding: 0 1.5rem 0 1.5rem;
  }
  @media screen and (max-width: 960px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    &:nth-child(2n+1) {
      padding: 2.5rem;
    }
    width: 100%;
  }
`;

export const NavMenuLink = styled(Link)`
  color: ${Colors.primary.blue};
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: -4px;
    background-color: transparent;
    transform: scale(0,1);
    transition: transform .3s;
    transform-origin: right top;
  }
  &:hover {
    &:after {
      transform: scale(1,1);
      transform-origin: left top;
      background-color: ${Colors.primary.blue};
    }
  }
`;