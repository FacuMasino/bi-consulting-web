import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";

export const ClientsCarouselContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 1.5rem 0;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 3.5rem;
  font-size: ${FontSize.desktop.sectionTitle};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${Colors.primary.blue};
  text-align: center;
  background-image: linear-gradient(
    120deg,
    rgb(22 98 156 / 56%) 0%,
    rgb(68 202 203 / 71%) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.sectionTitle};
    line-height: 2.2rem;
    margin-bottom: 0.8rem;
  }
`;
