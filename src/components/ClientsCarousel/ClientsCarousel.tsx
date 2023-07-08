import React from "react";
import { clientsList } from "../../data";
import { Container } from "../../globalStyles";
import { ClientsCarouselContainer, Heading } from "./ClientsCarousel.elements";
import { ClientsCarouselList2 } from "./ClientsCarouselList2/ClientsCarouselList2";

export const ClientsCarousel = ({ name }: { name: string }) => {
  return (
    <Container name={name}>
      <ClientsCarouselContainer>
        <Heading>Nuestros Clientes</Heading>
        {/*         <ClientsCarouselList clients={clientsList} />
         */}{" "}
        <ClientsCarouselList2 clients={clientsList} />
      </ClientsCarouselContainer>
    </Container>
  );
};
