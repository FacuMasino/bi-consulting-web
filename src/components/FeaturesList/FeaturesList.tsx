import React from "react";
import { Container } from "../../globalStyles";
import {
  IconItem,
  FeaturesContainer,
  ItemWrapper,
  TextItem,
} from "./FeaturesList.elements";

type TFeaturesList = {
  iconUrl: string;
  iconText: string;
};

interface FeaturesListProps {
  flexDir: "row" | "column";
  featuresArray: Array<TFeaturesList>;
}

const FeaturesList = ({ flexDir, featuresArray }: FeaturesListProps) => {
  return (
    <Container>
      <FeaturesContainer flexDir={flexDir}>
        {featuresArray.map(({ iconUrl, iconText }: TFeaturesList) => {
          return (
            <ItemWrapper flexDir={flexDir === "row" ? "column" : "row"}>
              <IconItem src={iconUrl} />
              <TextItem>{iconText}</TextItem>
            </ItemWrapper>
          );
        })}
      </FeaturesContainer>
    </Container>
  );
};

export default FeaturesList;
