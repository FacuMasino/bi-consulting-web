import React from "react";
import { Container } from "../../globalStyles";
import {
  IconItem,
  FeaturesContainer,
  ItemWrapper,
  TextItem,
  ScrollAnimation,
} from "./FeaturesList.elements";

const FeaturesList = ({
  flexDir,
  featuresArray,
  animate,
}: FeaturesListProps) => {
  return (
    <Container>
      <FeaturesContainer flexDir={flexDir}>
        {featuresArray.map(
          ({ iconUrl, iconText, iconAlt }: TFeaturesList, index) => {
            return (
              <ScrollAnimation
                animateIn="animate__fadeIn"
                offset={80}
                animateOnce={true}
                delay={index * 150}
                animate={animate}
                key={index}
              >
                <ItemWrapper
                  key={index}
                  flexDir={flexDir === "row" ? "column" : "row"}
                >
                  <IconItem
                    key={index + 1}
                    src={iconUrl}
                    alt={iconAlt ? iconAlt : ""}
                  />
                  {iconText ? (
                    <TextItem key={index + 2}>{iconText}</TextItem>
                  ) : (
                    ""
                  )}
                </ItemWrapper>
              </ScrollAnimation>
            );
          },
        )}
      </FeaturesContainer>
    </Container>
  );
};

export default FeaturesList;
