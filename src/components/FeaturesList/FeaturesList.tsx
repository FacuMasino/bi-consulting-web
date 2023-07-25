import React from "react";
import { Container } from "../../globalStyles";
import {
  IconItem,
  FeaturesContainer,
  ItemWrapper,
  TextItem,
} from "./FeaturesList.elements";
import { AnimationOnScroll } from "react-animation-on-scroll";

type TFeaturesList = {
  iconUrl: string;
  iconText?: string;
};

interface FeaturesListProps {
  flexDir: "row" | "column";
  featuresArray: Array<TFeaturesList>;
}

const FeaturesList = ({ flexDir, featuresArray }: FeaturesListProps) => {
  return (
    <Container>
      <FeaturesContainer flexDir={flexDir}>
        {featuresArray.map(({ iconUrl, iconText }: TFeaturesList, index) => {
          return (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              offset={80}
              animateOnce={true}
              delay={index * 150}
            >
              <ItemWrapper
                key={index}
                flexDir={flexDir === "row" ? "column" : "row"}
              >
                <IconItem src={iconUrl} />
                {iconText ? <TextItem>{iconText}</TextItem> : ""}
              </ItemWrapper>
            </AnimationOnScroll>
          );
        })}
      </FeaturesContainer>
    </Container>
  );
};

export default FeaturesList;
