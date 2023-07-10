import styled from "styled-components";
import { Colors } from "../../globalStyles";
import { ReactComponent as contactUsSvg } from "../../assets/images/get-in-touch.svg";

export const ContactRow = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const ContactColumn = styled.div`
  padding: 0 15px;
  width: 50%;
  color: black;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 2.65rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 65px;
  color: #fff;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    line-height: 45px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 60px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ContactIllustration = styled(contactUsSvg)`
  @media screen and (max-width: 960px) {
    height: auto;
    width: 80%;
    margin-bottom: 1.5rem;
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
  }
`;

export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  font-family: Inter;
  font-size: 1.25rem;
  line-height: 2rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 8px 16px;
  max-width: 500px;
  margin-bottom: 1.5rem;
  &:focus {
    outline: 0;
    border-color: {
      ${Colors.primary.highlight}
    }
    box-shadow: 0 0 0 0.25rem rgba(78, 207, 212, 0.25);
  }
  &::placeholder {
    opacity: 0.55;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FormText = styled.textarea`
  font-family: Inter;
  font-size: 1.25rem;
  line-height: 2rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 8px 16px;
  max-width: 500px;
  margin-bottom: 1.5rem;
  &:focus {
    outline: 0;
    border-color: {
      ${Colors.primary.highlight}
    }
    box-shadow: 0 0 0 0.25rem rgba(78, 207, 212, 0.25);
  }
  &::placeholder {
    opacity: 0.55;
  }
`;

export const FormButton = styled.button`
  background: none;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 700;
  color: #4ecfd4;
  line-height: 2rem;
  border-radius: 8px;
  padding: 16px 24px;
  border: 2px solid#4ECFD4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  align-self: flex-end;
  &:hover {
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    width: 100%;
  }
`;
