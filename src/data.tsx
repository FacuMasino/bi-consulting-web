interface ISection {
  textAlign: string;
  flexDir?: string;
  textWidth?: string;
  heading: string;
  headingAlign: "start" | "center" | "end";
  blockText: Array<String>;
  imgUrl?: string;
}

type TFeaturesList = {
  iconUrl: string;
  iconText?: string;
};

interface IFeaturesList {
  flexDir: "row" | "column";
  featuresArray: Array<TFeaturesList>;
}

type ServicesCardInfo = {
  cardImgUrl: string;
  cardTitle: string;
  cardText: string;
};

interface ServicesCardList {
  servicesArray: Array<ServicesCardInfo>;
}

type ClientProps = {
  clientImg: string;
  clientTitle: string;
  clientText: string;
  clientService: string;
};

export const sectionOne: ISection = {
  textAlign: "center",
  flexDir: "column",
  textWidth: "800px",
  heading: "¿Por qué elegirnos?",
  headingAlign: "center",
  blockText: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
};

export const sectionTwo: ISection = {
  textAlign: "start",
  flexDir: "column",
  textWidth: "415px",
  heading: "¿Quienes somos?",
  headingAlign: "start",
  blockText: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  imgUrl: "/assets/images/office-worker.jpg",
};

export const featuresList: IFeaturesList = {
  flexDir: "row",
  featuresArray: [
    {
      iconUrl: "/assets/images/hand-holding-heart-solid.svg",
      iconText: "Razón 1.",
    },
    {
      iconUrl: "/assets/images/handshake-solid.svg",
      iconText: "Razón 2.",
    },
    {
      iconUrl: "/assets/images/rocket-solid.svg",
      iconText: "Razón 3.",
    },
  ],
};

export const servicesList: ServicesCardList = {
  servicesArray: [
    {
      cardImgUrl: "/assets/images/firmware-rafiki.svg",
      cardTitle: "Servicio 1",
      cardText:
        "Lorem ipsum dolor sit amet consectetur. Enim sit faucibus porttitor molestie suspendisse dignissim nam dictum.",
    },
    {
      cardImgUrl: "/assets/images/firmware-cuate.svg",
      cardTitle: "Servicio 2",
      cardText:
        "Lorem ipsum dolor sit amet consectetur. Enim sit faucibus porttitor molestie suspendisse dignissim nam dictum.",
    },
    {
      cardImgUrl: "/assets/images/version-control-bro.svg",
      cardTitle: "Servicio 3",
      cardText:
        "Lorem ipsum dolor sit amet consectetur. Enim sit faucibus porttitor molestie suspendisse dignissim nam dictum.",
    },
  ],
};

export const ourTechsList: IFeaturesList = {
  flexDir: "row",
  featuresArray: [
    {
      iconUrl: "/assets/images/microsoft.svg",
    },
    {
      iconUrl: "/assets/images/vscode.svg",
    },
    {
      iconUrl: "/assets/images/dotnet.svg",
    },
    {
      iconUrl: "/assets/images/xamarin.svg",
    },
  ],
};

export const clientsList: Array<ClientProps> = [
  {
    clientImg: "assets/images/arcor90x90.png",
    clientTitle: "Arcor",
    clientText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    clientService: "Servicio brindado 1",
  },
  {
    clientImg: "assets/images/translorenzetti-logo-black.png",
    clientTitle: "Transporte Lorenzetti",
    clientText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    clientService: "Servicio brindado 2",
  },
  {
    clientImg: "assets/images/translorenzetti-logo-black.png",
    clientTitle: "Otro Cliente",
    clientText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    clientService: "Servicio brindado 3",
  },
];
