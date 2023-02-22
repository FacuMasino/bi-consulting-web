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
  margin: 0.5rem 0;
  @media screen and (max-width: 960px) {
    margin: 0.25rem 0;
  }
`;

export const ItemWrapper = styled.div<IFeaturesList>`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  justify-content: center;
`;

export const IconItem = styled.img`
  object-fit: contain;
  width: 75px;
  height: 75px;
  @media screen and (max-width: 960px) {
    width: 45px;
    height: 45px;
  }
`;

export const TextItem = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${FontSize.desktop.cardTitle};
  line-height: 2.25rem;
  color: ${Colors.primary.blue};
  margin-top: 1rem;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    line-height: ${FontSize.mobile.cardTitle};
    margin-top: 0.5rem;
  }
`;
