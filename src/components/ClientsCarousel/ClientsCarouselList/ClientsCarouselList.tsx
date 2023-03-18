import React from "react";
import { useState, useEffect } from "react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import {
  AnimateSlide,
  CarouseList,
  StyledFAIcon,
} from "./ClientsCarouselList.elements";
import { ClientsCard } from "../../ClientsCard/ClientsCard";

type ClientProps = {
  clientImg: string;
  clientTitle: string;
  clientText: string;
  clientService: string;
};

interface ClientsLArray {
  clients: Array<ClientProps>;
}

export const ClientsCarouselList = ({ clients }: ClientsLArray) => {
  const [selectedClient, setSelectedClient] = useState(0);
  const [toggleAnimation, setToggleAnimation] = useState(true);

  const nextClient = () => {
    setToggleAnimation(!toggleAnimation);
    if (clients.length - 1 > selectedClient) {
      setSelectedClient(selectedClient + 1);
    } else {
      setSelectedClient(0);
    }
    console.log(selectedClient);
  };

  useEffect(() => {
    if (toggleAnimation === false) {
      setToggleAnimation(true);
      return;
    }
  }, [toggleAnimation]);

  return (
    <CarouseList>
      <StyledFAIcon icon={faLessThan} size="2x" />
      <AnimateSlide animate={toggleAnimation}>
        <ClientsCard
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...clients[selectedClient]}
        />
      </AnimateSlide>
      <StyledFAIcon
        onClick={() => nextClient()}
        icon={faGreaterThan}
        size="2x"
      />
    </CarouseList>
  );
};

// Slide animation -> https://codepen.io/prasann/pen/ppNLNL
