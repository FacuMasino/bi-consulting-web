import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";

export interface ContainerProps {
  name?: string;
}

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
  .LazyLoad {
    background-size: cover;
    opacity: 0;
    transition: all 1s ease-in-out;
  }

  .is-visible {
    opacity: 1;
  }
`;

export const Colors = {
  primary: {
    linearGradient: "to right, #182641, #16629C",
    blue: "#182641",
  },
  neutral: {
    lightBlue: "#E5EDF2",
    veryDarkGray: "#2A2A2A",
  },
};

export const FontSize = {
  desktop: {
    sectionTitle: "2.2rem",
    cardTitle: "1.4rem",
    subTitle: "1.6rem",
    paragraph: "1.12rem",
  },
  mobile: {
    sectionTitle: "2rem",
    cardTitle: "1.2rem",
    subTitle: "1.3rem",
    paragraph: "1rem",
  },
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
`;

export default GlobalStyle;
