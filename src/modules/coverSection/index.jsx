import { lazy } from "react";
import MainLayout from "@/layouts/Main";

const HeadSection = lazy(() => import("@/modules/coverSection/HeadSection"));
const NewsSection = lazy(() => import("@/modules/coverSection/NewsSection"));

const CoverModules = () => {
  return (
    <MainLayout>
      <HeadSection />
      <NewsSection />
    </MainLayout>
  );
};

export default CoverModules;
