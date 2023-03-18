import React from "react";
import { clientsList } from "../../data";
import { Container } from "../../globalStyles";
import { ClientsCarouselContainer, Heading } from "./ClientsCarousel.elements";
import { ClientsCarouselList } from "./ClientsCarouselList/ClientsCarouselList";
import { ClientsCarouselList2 } from "./ClientsCarouselList2/ClientsCarouselList2";

export const ClientsCarousel = () => {
  return (
    <Container>
      <ClientsCarouselContainer>
        <Heading>Nuestros Clientes</Heading>
        {/*         <ClientsCarouselList clients={clientsList} />
         */}{" "}
        <ClientsCarouselList2 clients={clientsList} />
      </ClientsCarouselContainer>
    </Container>
  );
};
