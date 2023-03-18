import styled from "styled-components";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AnimateSlideProps = {
  animate: Boolean;
};

export const CarouseList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const StyledFAIcon = styled(FontAwesomeIcon)`
  @media screen and (max-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.2rem;
  }
`;

export const AnimateSlide = styled.div<AnimateSlideProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  animation: ${({ animate }) => (animate ? "slideanimation" : "none")} 1s linear;

  @keyframes slideanimation {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    25% {
      transform: translateX(-200px);
      opacity: 0;
    }
    50% {
      transform: translateX(200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
