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
import headIllustration from "../../assets/images/hero-illustration-min.svg";

const HeroHeader = ({ name }: { name: string }) => {
  return (
    <HeroHead name={name}>
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
              <Img
                src={headIllustration}
                alt="Ilustración de una computadora con gráficos estadísticos y un servidor en la nube"
                width="100%"
                height="100%"
              />
            </ImageWrapper>
          </HeroColumn>
        </HeroRow>
      </Container>
      <HeroShape />
    </HeroHead>
  );
};

export default HeroHeader;
