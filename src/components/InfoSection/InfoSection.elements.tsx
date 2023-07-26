import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const ScrollAnimation = styled(AnimationOnScroll)<ScrollAnimationProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  ${({ animate }) =>
    !animate &&
    `
    animation: none;
    animation-duration: 0s !important;
    opacity: 100% !important;
  `}
`;

export const InfoContainer = styled.div<Partial<InfoSectionProps>>`
  display: flex;
  flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
  @media screen and (max-width: 960px) {
    margin: 1rem 0;
  }
`;

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    max-width: fit-content;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 400px;
  max-height: 315px;
  @media screen and (max-width: 960px) {
    max-width: 80%;
    max-height: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  filter: drop-shadow(1px 5px 5px #f4f7ff);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; // Avoid scroll animation overflow
`;

export const Heading = styled.h2<Partial<InfoSectionProps>>`
  margin-bottom: 1.56rem;
  font-size: ${FontSize.desktop.sectionTitle};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${Colors.primary.blue};
  text-align: center;
  align-self: ${({ headingAlign }) => headingAlign};
  background-image: linear-gradient(
    120deg,
    rgb(22 98 156 / 56%) 0%,
    rgb(68 202 203 / 71%) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.sectionTitle};
    line-height: 2.2rem;
    margin-bottom: 0.8rem;
    align-self: center;
  }
`;

export const InfoText = styled.p<Partial<InfoSectionProps>>`
  max-width: ${({ textWidth }) => textWidth};
  margin-bottom: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${FontSize.desktop.paragraph};
  line-height: 1.28rem;
  text-align: ${({ textAlign }) => textAlign};
  color: ${Colors.neutral.veryDarkGray};
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.paragraph};
    text-align: justify;
    max-width: 100%;
  }
`;
