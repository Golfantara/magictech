import { lazy } from "react";

const FactSection = lazy(() => import("@/modules/eightSection/Fact"));
const FactSplitSection = lazy(() => import("@/modules/eightSection/FactSplit"));

const eightSection = () => {
  return (
    <div className="bg-[#1D88C9] mt-10 pb-10 px-4 md:px-0">
      <FactSection />
      <FactSplitSection />
    </div>
  );
};

export default eightSection;
