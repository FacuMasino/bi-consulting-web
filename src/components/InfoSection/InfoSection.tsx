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
} from "./InfoSection.elements";

interface InfoProps {
  textAlign: string;
  flexDir?: string;
  textWidth?: string;
  heading: string;
  headingAlign: "start" | "center" | "end";
  blockText: Array<String>;
  imgUrl?: string;
}

const InfoSection = ({
  flexDir,
  textAlign,
  textWidth,
  heading,
  headingAlign,
  blockText,
  imgUrl,
}: InfoProps): JSX.Element => {
  return (
    <Container>
      <InfoContainer flexDir={flexDir}>
        <Heading headingAlign={headingAlign} textAlign={textAlign}>
          {heading}
        </Heading>
        <InfoWrapper>
          <TextWrapper>
            {blockText.map((text, index) => {
              return (
                <InfoText
                  key={index}
                  textWidth={textWidth}
                  textAlign={textAlign}
                >
                  {text}
                </InfoText>
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
