import styled from "styled-components";
import { Colors, ContainerProps, StyledLink } from "../../globalStyles";
import { ReactComponent as topWave } from "../../assets/images/footer-top-wave-3.svg";
import { ReactComponent as logoWhite } from "../../assets/images/logo-white-horizontal.svg";

export const FooterContainer = styled.div<ContainerProps>`
  background: linear-gradient(${Colors.primary.linearGradient});
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 400px;
  padding-top: 90px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    padding-top: 1.5rem;
  }
`;

export const FooterShape = styled(topWave)`
  position: absolute;
  top: 0;
  height: 90px;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const FooterSection = styled.footer`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-flow: column-reverse;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  width: 50%;
  padding-left: 2rem;
  @media screen and (max-width: 960px) {
    width: auto;
    padding-left: 0;
    margin-bottom: 1.5rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;
  padding-top: 2.5rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    gap: 0;
    flex-direction: column;
    padding: 1rem 0 1rem 0;
  }
`;

export const FooterLogo = styled(logoWhite)`
  width: 230px;
`;

export const LinksContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`;

export const ListTitle = styled.h3`
  color: #fff;
  font-weight: 600;
  font-family: Inter;
  font-size: 1.4rem;
  line-height: normal;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 960px) {
    display: inline;
    width: min-content;
    align-self: center;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  font-family: Inter;
  font-weight: normal;
  flex-direction: column;
  color: #fff;
  list-style: none;
`;
export const LinkItem = styled.li`
  padding-bottom: 0.5rem;
`;

export const FooterLink = styled(StyledLink)`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: -3px;
    background-color: transparent;
    transform: scale(0, 1);
    transition: transform 0.3s;
    transform-origin: right top;
  }
  &:hover {
    &:after {
      transform: scale(1, 1);
      transform-origin: left top;
      background-color: #fff;
    }
  }
`;

export const CopyText = styled.p`
  margin-left: 50px;
  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 300;
  max-width: 180px;
  color: #fff;
`;

export const DevCredits = styled.div`
  width: 100%;
  font-family: Inter;
  font-weight: 300;
  text-align: right;
  color: rgba(255, 255, 255, 0.35);
  p {
    margin: 1rem 0 1rem 0;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;
