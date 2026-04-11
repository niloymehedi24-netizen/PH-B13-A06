import { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import PricingSection from "./components/PricingSection";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

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
          className={`tab rounded-full transition w-30 ${activeTab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"}`}
          aria-label="Products"
          onClick={() => {
            setActiveTab("Products");
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full text-black transition w-30 ${activeTab === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"}`}
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

      <Footer></Footer>
    </>
  );
}

export default App;
