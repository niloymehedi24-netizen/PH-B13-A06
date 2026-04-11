import { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
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
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mb-6 gap-2">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-30"
          aria-label="Products"
          onClick={() => {
            setActiveTab("Products");
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-30"
          aria-label={`Cart (${carts.length})`}
          onClick={() => {
            setActiveTab("Cart");
          }}
        />
      </div>

      {activeTab === "Products" ? (
        <Tools
          toolPromise={toolPromise}
          carts={carts}
          setCarts={setCarts}
        ></Tools>
      ) : null}

      {activeTab === "Cart" ? (
        <Cart carts={carts} setCarts={setCarts}></Cart>
      ) : null}

      <Steps></Steps>

      <PricingSection></PricingSection>
    </>
  );
}

export default App;
