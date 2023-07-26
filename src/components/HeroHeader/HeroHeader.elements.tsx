import styled from "styled-components";
import { Colors } from "../../globalStyles";
import { ReactComponent as bottomShape } from "../../assets/images/hero-bottom-shape.svg";

export const HeroHead = styled.div<HeroHeadProps>`
  background: linear-gradient(${Colors.primary.linearGradient});
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 400px;
  position: relative;
  padding-bottom: 90px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    max-height: calc(100vh - 60px);
    padding-bottom: 0;
  }
`;

export const HeroShape = styled(bottomShape)`
  position: absolute;
  bottom: 0;
  height: 90px;
  width: calc(300% + 1.3px);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const HeroRow = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 80vh;
    justify-content: space-evenly;
  }
`;

export const HeroColumn = styled.div`
  padding: 0 15px;
  width: 50%;
  //background: white;
  color: black;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 650px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  max-width: 550px;
  filter: drop-shadow(0px 4px 70px rgba(42, 141, 156, 0.45));
`;

export const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 65px;
  color: #fff;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    line-height: 45px;
  }
`;

export const Subtitle = styled.p`
  max-width: 495px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 36px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 960px) {
    font-size: 1.15rem;
    line-height: 24px;
  }
`;
