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
  width: 100%;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CarouselList = styled.div`
  overflow: hidden;
`;

export const CarouselInner = styled.div<CarouselInnerProps>`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: translateX(-${({ activeClient }) => activeClient * 100}%);
`;

export const StyledFAIcon = styled(FontAwesomeIcon)`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
