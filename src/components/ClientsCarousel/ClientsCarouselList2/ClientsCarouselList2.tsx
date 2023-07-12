import React from "react";
import { useState, useEffect } from "react";
import { ClientsCard } from "../../ClientsCard/ClientsCard";
import {
  CarouselContainer,
  CarouselInner,
  CarouselItem,
  CarouselList,
  StyledFAIcon,
} from "./ClientsCarouselList2.elements";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";

type ClientProps = {
  clientImg: string;
  clientTitle: string;
  clientText: string;
  clientService: string;
};

interface ClientsLArray {
  clients: Array<ClientProps>;
}

export const ClientsCarouselList2 = ({ clients }: ClientsLArray) => {
  const [activeClient, setActiveClient] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateClient = (newClient: number) => {
    if (newClient < 0) {
      newClient = clients.length - 1;
    } else if (newClient >= clients.length) {
      newClient = 0;
    }
    setActiveClient(newClient);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        updateClient(activeClient + 1);
      }
    }, 3500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateClient(activeClient + 1),
    onSwipedRight: () => updateClient(activeClient - 1),
  });

  return (
    <CarouselContainer>
      <StyledFAIcon
        onClick={() => updateClient(activeClient - 1)}
        icon={faLessThan}
        size="2x"
      />
      <CarouselList
        {...handlers}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CarouselInner activeClient={activeClient}>
          {clients.map(({ ...client }: ClientProps, index: number) => {
            return (
              <CarouselItem key={index}>
                <ClientsCard {...client} />
              </CarouselItem>
            );
          })}
        </CarouselInner>
      </CarouselList>
      <StyledFAIcon
        onClick={() => updateClient(activeClient + 1)}
        icon={faGreaterThan}
        size="2x"
      />
    </CarouselContainer>
  );
};
