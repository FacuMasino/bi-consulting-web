import React from "react";
import {
  HeroHead,
  HeroColumn,
  HeroRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImageWrapper,
  Img,
  HeroShape,
} from "./HeroHeader.elements";
import { Container } from "../../globalStyles";
import headIllustration from "../../assets/images/hero-illustration.svg";

const HeroHeader = () => {
  return (
    <HeroHead>
      <Container>
        <HeroRow>
          <HeroColumn>
            <TextWrapper>
              <Heading>Creamos Soluciones Inteligentes.</Heading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Subtitle>
            </TextWrapper>
          </HeroColumn>
          <HeroColumn>
            <ImageWrapper>
              <Img src={headIllustration} />
            </ImageWrapper>
          </HeroColumn>
        </HeroRow>
      </Container>
      <HeroShape />
    </HeroHead>
  );
};

export default HeroHeader;
