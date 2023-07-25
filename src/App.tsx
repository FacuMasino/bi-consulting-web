import GlobalStyle from "./globalStyles";
import {
  Navbar,
  HeroHeader,
  InfoSection,
  FeaturesList,
  Services,
  OurTechs,
  ClientsCarousel,
  Contact,
  Footer,
} from "./components";
import {
  sectionOne,
  sectionTwo,
  featuresList,
  servicesList,
  ourTechsList,
} from "./data";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroHeader name="home" />
      <InfoSection
        flexDir={sectionOne.flexDir}
        textAlign={sectionOne.textAlign}
        textWidth={sectionOne.textWidth}
        heading={sectionOne.heading}
        headingAlign={sectionOne.headingAlign}
        blockText={sectionOne.blockText}
        animate={false}
      />
      <FeaturesList
        flexDir={featuresList.flexDir}
        featuresArray={featuresList.featuresArray}
      />
      <Services name="services" servicesArray={servicesList.servicesArray} />
      <InfoSection
        name="about"
        flexDir={sectionTwo.flexDir}
        textAlign={sectionTwo.textAlign}
        textWidth={sectionTwo.textWidth}
        heading={sectionTwo.heading}
        headingAlign={sectionTwo.headingAlign}
        blockText={sectionTwo.blockText}
        imgUrl={sectionTwo.imgUrl}
        animate={true}
      />
      <OurTechs techsArray={ourTechsList.featuresArray} />
      <ClientsCarousel name="clients" />
      <Footer>
        <Contact />
      </Footer>
    </>
  );
}

export default App;
