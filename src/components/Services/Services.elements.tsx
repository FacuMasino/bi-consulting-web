import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";

export interface ServicesProps {
  name: string;
}

export const ServicesSection = styled.section<ServicesProps>`
  display: flex;
  align-items: center;
  background-color: ${Colors.neutral.lightBlue};
  padding: 2rem 0;
  margin: 3.5rem 0;
  @media screen and (max-width: 960px) {
    margin: 1.5rem 0;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 25px;
  font-size: ${FontSize.desktop.sectionTitle};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${Colors.primary.blue};
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.sectionTitle};
    line-height: 2.2rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
