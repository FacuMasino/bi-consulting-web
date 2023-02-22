import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

export default GlobalStyle;
