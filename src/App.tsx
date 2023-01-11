import GlobalStyle from "./globalStyles";
import { Navbar, HeroHeader, InfoSection, FeaturesList } from "./components";
import { sectionOne, featuresList, servicesList } from "./data";
import Services from "./components/Services/Services";

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
        blockText={sectionOne.blockText}
      />
      <FeaturesList
        flexDir={featuresList.flexDir}
        featuresArray={featuresList.featuresArray}
      />
      <Services servicesArray={servicesList.servicesArray} />
    </>
  );
}

export default App;
