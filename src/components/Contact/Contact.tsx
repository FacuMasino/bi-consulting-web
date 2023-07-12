import { useState } from "react";
import { Container } from "../../globalStyles";
import {
  ContactColumn,
  ContactIllustration,
  ContactRow,
  FormInput,
  FormWrapper,
  Heading,
  Subtitle,
  Form,
  FormText,
  FormButton,
} from "./Contact.elements";
import { MsgProps, openWpp } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState<MsgProps>({
    username: "",
    useremail: "",
    message: "",
  });

  const handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //console.log(formData);
    openWpp(formData);
  };

  return (
    <Container>
      <Heading>¿Tenés un proyecto en mente?</Heading>
      <ContactRow>
        <ContactColumn>
          <ContactIllustration />
        </ContactColumn>
        <ContactColumn>
          <Subtitle>Contactanos</Subtitle>
          <FormWrapper>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormInput
                type="text"
                name="username"
                placeholder="Tu nombre"
                onChange={(e) => handleInput(e)}
                required
              />
              <FormInput
                type="email"
                name="useremail"
                placeholder="tuemail@email.com"
                onChange={(e) => handleInput(e)}
                required
              />
              <FormText
                name="message"
                rows={4}
                placeholder="Escribí tu mensaje"
                onChange={(e) => handleInput(e)}
                required
              />
              <FormButton>Enviar mensaje</FormButton>
            </Form>
          </FormWrapper>
        </ContactColumn>
      </ContactRow>
    </Container>
  );
};

export default Contact;
