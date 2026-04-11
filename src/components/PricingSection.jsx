import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="mb-20">
      <div className="items-center text-center mt-8 mb-8">
        <h1 className="text-5xl font-bold text-[#101727] mb-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] font-normal">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="h-100 w-70 rounded-lg shadow-2xl bg-zinc-100 p-5 mb-5">
          <div className="mb-4">
            <h4 className="text-[#101727] font-bold text-xl">Starter</h4>
            <p className="text-[#627382] font-normal">
              Perfect for getting started
            </p>
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold mb-4">
              $0{" "}
              <span className="text-[#627382] text-lg font-normal">/Month</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Access to 10 free tools</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Basic templates</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Community support</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">1 project per month</p>
              </div>
            </div>
          </div>
          <button className="btn mt-10 mb-8 items-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-11/12">
            Get Started Free
          </button>
        </div>
        <div className="h-100 w-70 rounded-lg shadow-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5 mb-5">
          <div className="h-7 w-30 text-center">
            <p className="border bg-[#FEF3C6] rounded-2xl relative -top-8 -right-16 text-[#BB4D00]">
              Most Popular
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-white font-bold text-xl">Pro</h4>
            <p className="text-white font-normal">Best for professionals</p>
          </div>
          <div>
            <h2 className="text-4xl text-white font-bold mb-4">
              $29 <span className="text-white text-lg font-normal">/Month</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Access to all premium tools</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Unlimited templates</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Priority support</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Unlimited projects</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Cloud sync</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white"></FaCheck>
                <p className="text-white">Advanced analytics</p>
              </div>
            </div>
          </div>
          <button className="btn mt-10 mb-8 items-center text-center rounded-full bg-white text-linear-to-r from-[#4F39F6] to-[#9514FA] w-11/12">
            Get Started Free
          </button>
        </div>
        <div className="h-100 w-70 rounded-lg shadow-2xl bg-zinc-100 p-5 mb-5">
          <div className="mb-4">
            <h4 className="text-[#101727] font-bold text-xl">Enterprise</h4>
            <p className="text-[#627382] font-normal">
              For teams and businesses
            </p>
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold mb-4">
              $99{" "}
              <span className="text-[#627382] text-lg font-normal">/Month</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Everything in Pro</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Team collaboration</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Custom integrations</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Dedicated support</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">SLA guarantee</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#30B868]"></FaCheck>
                <p className="text-[#627382]">Custom branding</p>
              </div>
            </div>
          </div>
          <button className="btn mt-10 mb-8 items-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-11/12">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
