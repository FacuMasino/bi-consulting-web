import GlobalStyle from './globalStyles';
import { Navbar, HeroHeader, InfoSection, FeaturesList } from "./components";
import { sectionOne, featuresList } from './data';
import Services from './components/Services/Services';

function App() {
  return (
      <>
        <GlobalStyle />
        <Navbar/>
        <HeroHeader />
        <InfoSection {...sectionOne}/>
        <FeaturesList {...featuresList}/>
        <Services />
      </>
  );
}

export default App;