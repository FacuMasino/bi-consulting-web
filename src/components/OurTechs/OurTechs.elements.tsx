import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";

export const OurTechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.neutral.lightBlue};
  padding: 1rem 0;
  margin: 3.5rem 0;
  @media screen and (max-width: 960px) {
    margin: 1.5rem 0;
    padding: 0.5rem;
  }
`;

export const Heading = styled.h3`
  font-size: ${FontSize.desktop.subTitle};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.25rem;
  color: ${Colors.primary.blue};
  margin-bottom: 1.56rem;
  text-align: center;
  @media screen and (max-width: 960px) {
    margin-bottom: 0.25rem;
    font-size: ${FontSize.mobile.subTitle};
    line-height: 2.15rem;
  }
`;
