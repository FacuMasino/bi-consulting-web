interface NavMenuProps {
  isOpen: boolean;
}
interface NavProps {
  isScrolling: boolean;
}

interface ClientsProps {
  clientImg: string;
  clientTitle: string;
  clientText: string;
  clientService: string;
}

interface CarouselInnerProps {
  activeClient: number;
}

interface IFeaturesList {
  flexDir: "row" | "column";
}

interface ScrollAnimationProps {
  animate: boolean;
}

interface TFeaturesList {
  iconUrl: string;
  iconText?: string;
  iconAlt?: string;
}

interface FeaturesListProps {
  flexDir: "row" | "column";
  featuresArray: Array<TFeaturesList>;
  animate: boolean;
}

interface InfoSectionProps {
  textAlign: string;
  headingAlign: "start" | "center" | "end";
  flexDir: string;
  textWidth: string;
  imgUrl: string;
}

interface InfoProps {
  name?: string;
  textAlign: string;
  flexDir?: string;
  textWidth?: string;
  heading: string;
  headingAlign: "start" | "center" | "end";
  blockText: Array<String>;
  imgUrl?: string;
  imgAlt?: string;
  animate: boolean;
}

type TOurTechsList = {
  iconUrl: string;
  iconText?: string;
  iconAlt?: string;
};

interface OurTechsArray {
  techsArray: Array<TOurTechsList>;
}

interface ServicesCardInfo {
  cardImgUrl: string;
  cardImgAlt: string;
  cardTitle: string;
  cardText: string;
}

interface ServicesCardList {
  name: string; // prop for smooth scroll
  servicesArray: Array<ServicesCardInfo>;
}

interface ServicesCardProps {
  cardImgUrl: string;
  cardImgAlt: string;
  cardTitle: string;
  cardText: string;
  index: number;
}

// name prop is to pass the attribute to the element
// name will allow smooth scroll to recognize where to scroll
interface ServicesProps {
  name: string;
}
interface HeroHeadProps {
  name: string;
}
