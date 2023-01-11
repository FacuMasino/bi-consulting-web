import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";

interface IFeaturesList {
  flexDir: "row" | "column";
}

export const FeaturesContainer = styled.div<IFeaturesList>`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 4rem 0;
  padding: 1rem;
  @media screen and (max-width: 960px) {
    margin: 2rem 0;
    padding: 0.5rem;
  }
`;

export const ItemWrapper = styled.div<IFeaturesList>`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  justify-content: center;
`;

export const IconItem = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    width: 45px;
    height: 45px;
    margin-bottom: 0.5rem;
  }
`;

export const TextItem = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${FontSize.desktop.subHeading};
  line-height: 2.25rem;
  color: ${Colors.primary.blue};
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    line-height: ${FontSize.mobile.subHeading};
  }
`;
