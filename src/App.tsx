import GlobalStyle from "./globalStyles";
import { Navbar, HeroHeader, InfoSection, FeaturesList } from "./components";
import {
  sectionOne,
  sectionTwo,
  featuresList,
  servicesList,
  ourTechsList,
} from "./data";
import Services from "./components/Services/Services";
import OurTechs from "./components/OurTechs/OurTechs";
import { ClientsCarousel } from "./components/ClientsCarousel/ClientsCarousel";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroHeader />
      <InfoSection
        flexDir={sectionOne.flexDir}
        textAlign={sectionOne.textAlign}
        textWidth={sectionOne.textWidth}
        heading={sectionOne.heading}
        headingAlign={sectionOne.headingAlign}
        blockText={sectionOne.blockText}
      />
      <FeaturesList
        flexDir={featuresList.flexDir}
        featuresArray={featuresList.featuresArray}
      />
      <Services servicesArray={servicesList.servicesArray} />
      <InfoSection
        flexDir={sectionTwo.flexDir}
        textAlign={sectionTwo.textAlign}
        textWidth={sectionTwo.textWidth}
        heading={sectionTwo.heading}
        headingAlign={sectionTwo.headingAlign}
        blockText={sectionTwo.blockText}
        imgUrl={sectionTwo.imgUrl}
      />
      <OurTechs techsArray={ourTechsList.featuresArray} />
      <ClientsCarousel />
    </>
  );
}

export default App;
