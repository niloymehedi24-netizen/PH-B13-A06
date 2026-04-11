import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import PricingSection from "./components/PricingSection";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Tools from "./components/Tools";

const getTools = async () => {
  const res = await fetch("/public/tools.json");
  return res.json();
};

const toolPromise = getTools();

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Tools toolPromise={toolPromise}></Tools>

      <Steps></Steps>

      <PricingSection></PricingSection>
    </>
  );
}

export default App;
