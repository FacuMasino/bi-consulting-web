import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CarouselInnerProps = {
  activeClient: number;
};

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 0 3rem 0%;
`;

export const CarouselList = styled.div`
  overflow: hidden;
`;

export const CarouselInner = styled.div<CarouselInnerProps>`
  white-space: nowrap;
  transition: transform 0.8s;
  transition-timing-function: ease-in-out;
  transform: translateX(-${({ activeClient }) => activeClient * 100}%);
`;

export const StyledFAIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
