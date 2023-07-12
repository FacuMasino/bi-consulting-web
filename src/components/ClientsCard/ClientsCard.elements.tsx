import styled from "styled-components";
import { Colors, FontSize } from "../../globalStyles";

export const ClientWrapper = styled.div`
  background-color: #fff;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  white-space: normal;
  border: 1px solid ${Colors.primary.blue};
  border-radius: 10px;
  width: 29rem;
  padding: 0.8rem;
  gap: 0.8rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  margin: 0.5rem;
  transition: transform 0.35s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: scale(1.11);
  }
  @media screen and (max-width: 960px) {
    min-width: 18rem;
    width: 60%;
    flex-direction: column;
    padding: 0.7rem;
    gap: 0.7rem;
  }
`;

export const ClientImg = styled.img`
  height: 130px;
  width: 130px;
  object-fit: contain;
  vertical-align: middle;
`;

export const ClientBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ClientTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${FontSize.desktop.cardTitle};
  line-height: 2.25rem;
  color: ${Colors.primary.blue};
  align-self: start;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.cardTitle};
    line-height: 2rem;
  }
`;

export const ClientText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${FontSize.desktop.paragraph};
  line-height: 1.2rem;
  text-align: left;
  padding-bottom: 0.5rem;
  color: ${Colors.neutral.veryDarkGray};
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.paragraph};
  }
`;

export const ClientService = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: ${FontSize.desktop.paragraph};
  line-height: 1.2rem;
  color: ${Colors.primary.blue};
  align-self: end;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: ${FontSize.mobile.paragraph};
    line-height: 2rem;
  }
`;
