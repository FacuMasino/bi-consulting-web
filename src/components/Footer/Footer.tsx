import React from "react";
import {
  CopyText,
  DevCredits,
  FooterContainer,
  FooterLeft,
  FooterLink,
  FooterLogo,
  FooterRight,
  FooterSection,
  FooterShape,
  LinkItem,
  LinksContainer,
  LinksList,
  ListTitle,
} from "./Footer.elements";
import { Container } from "../../globalStyles";

const Footer = ({ children }: { children: JSX.Element }) => {
  return (
    <FooterContainer name="contact">
      <FooterShape />
      {children}
      <Container>
        <FooterSection>
          <FooterLeft>
            <FooterLogo />
            <CopyText>
              {new Date().getFullYear()} © Todos los derechos reservados
            </CopyText>
          </FooterLeft>
          <FooterRight>
            <LinksContainer>
              <ListTitle>Menú</ListTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    spy={true}
                  >
                    Inicio
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    spy={true}
                  >
                    Servicios
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    spy={true}
                  >
                    Quienes somos
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink
                    to="clients"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    spy={true}
                  >
                    Clientes
                  </FooterLink>
                </LinkItem>
              </LinksList>
            </LinksContainer>
            <LinksContainer>
              <ListTitle>Contacto</ListTitle>
              <LinksList>
                <LinkItem>mail@dominio.com.ar</LinkItem>
                <LinkItem>+54 2227-000000</LinkItem>
              </LinksList>
            </LinksContainer>
          </FooterRight>
        </FooterSection>
        <DevCredits>
          <hr />
          <p>
            Sitio web desarrollado por{" "}
            <a
              href="https://github.com/FacuMasino"
              target="_blank"
              rel="noreferrer"
            >
              <b>Facundo Masino</b>
            </a>
          </p>
        </DevCredits>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
