import styled from "styled-components";
import { Colors } from "../../globalStyles";

export const ContactRow = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 80vh;
    justify-content: space-evenly;
  }
`;
