import styled from "styled-components";
import { Colors } from "../../globalStyles";
import { ReactComponent as topWave } from "../../assets/images/footer-top-wave-3.svg";

export const FooterContainer = styled.div`
  background: linear-gradient(${Colors.primary.linearGradient});
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 400px;
  padding-top: 90px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    max-height: calc(100vh - 60px);
    padding-bottom: 0;
  }
`;

export const FooterShape = styled(topWave)`
  position: absolute;
  top: 0;
  height: 90px;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
