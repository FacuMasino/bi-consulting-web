import GlobalStyle from './globalStyles';
import { Navbar, HeroHeader, InfoSection, FeaturesList } from "./components";
import { sectionOne, featuresList, servicesList } from './data';
import Services from './components/Services/Services';

function App() {
  return (
      <>
        <GlobalStyle />
        <Navbar/>
        <HeroHeader />
        <InfoSection {...sectionOne}/>
        <FeaturesList {...featuresList}/>
        <Services {...servicesList} />
      </>
  );
}

export default App;