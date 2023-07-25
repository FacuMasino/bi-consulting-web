import React from "react";
import { Container } from "../../globalStyles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoContainer,
  InfoText,
  InfoWrapper,
  TextWrapper,
  ScrollAnimation,
} from "./InfoSection.elements";

interface InfoProps {
  name?: string;
  textAlign: string;
  flexDir?: string;
  textWidth?: string;
  heading: string;
  headingAlign: "start" | "center" | "end";
  blockText: Array<String>;
  imgUrl?: string;
  animate: boolean;
}

const InfoSection = ({
  name,
  flexDir,
  textAlign,
  textWidth,
  heading,
  headingAlign,
  blockText,
  imgUrl,
  animate,
}: InfoProps): JSX.Element => {
  return (
    <Container name={name}>
      <InfoContainer flexDir={flexDir}>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          offset={60}
          animateOnce={true}
          animate={animate}
        >
          <Heading headingAlign={headingAlign} textAlign={textAlign}>
            {heading}
          </Heading>
        </ScrollAnimation>
        <InfoWrapper>
          <TextWrapper>
            {blockText.map((text, index) => {
              return (
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  offset={60}
                  animateOnce={true}
                  animate={animate}
                >
                  <InfoText
                    key={index}
                    textWidth={textWidth}
                    textAlign={textAlign}
                  >
                    {text}
                  </InfoText>
                </ScrollAnimation>
              );
            })}
          </TextWrapper>
          {imgUrl ? (
            <ImgWrapper>
              <Img src={imgUrl} />
            </ImgWrapper>
          ) : (
            ""
          )}
        </InfoWrapper>
      </InfoContainer>
    </Container>
  );
};

export default InfoSection;
