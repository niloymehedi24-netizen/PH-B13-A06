import { HiMiniCheckCircle } from "react-icons/hi2";
import BannerImage from "../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-sm font-medium px-5 py-2 rounded-full">
            <HiMiniCheckCircle className="text-[#4F39F6]"></HiMiniCheckCircle>{" "}
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your <br />
            Digital Workflow
            <br />
          </h1>

          <p className="text-lg text-[#627382] max-w-lg leading-normal">
            {" "}
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white px-8 py-4  font-semibold text-lg flex items-center gap-3 group">
              Explore Products
            </button>
            <button className="btn text-transparent rounded-full px-8 py-4 font-semibold text-lg shadow-xl flex items-center gap-3 group bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text">
              <FaPlay className="text-[#9514FA]"></FaPlay> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
