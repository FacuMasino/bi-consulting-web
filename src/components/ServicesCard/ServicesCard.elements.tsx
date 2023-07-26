import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const CardWrapper = styled(AnimationOnScroll)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${Colors.primary.blue};
  border-radius: 10px;
  width: 18rem;
  @media screen and (max-width: 960px) {
    min-width: 18rem;
    width: 50%;
  }
`;

export const CardImg = styled.img`
  height: 115px;
  width: 115px;
  padding: 0.5rem;
  vertical-align: middle;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.12rem;
`;

export const CardTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${FontSize.desktop.cardTitle};
  line-height: 2.25rem;
  color: ${Colors.primary.blue};
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.cardTitle};
    line-height: 2rem;
  }
`;

export const CardText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${FontSize.desktop.paragraph};
  line-height: 1.25rem;
  text-align: center;
  padding-bottom: 0.5rem;
  color: ${Colors.neutral.veryDarkGray};
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.paragraph};
  }
`;
