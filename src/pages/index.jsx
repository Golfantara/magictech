import { lazy } from "react";
import MainLayout from "@/layouts/main";

const CoverModules = lazy(() => import("@/modules/coverSection"));
const TestimonialModules = lazy(() => import("@/modules/testimoniSection"));
const ThirdSection = lazy(() => import("@/modules/thirdSection"));
const FourthSection = lazy(() => import("@/modules/fourthSection"));
const FifthSection = lazy(() => import("@/modules/fifthSection"));
const SixSection = lazy(() => import("@/modules/sixSection"));
const SevenSection = lazy(() => import("@/modules/sevenSection"));
const EightSection = lazy(() => import("@/modules/eightSection"));
const BpomSection = lazy(() => import("@/modules/bpomSection"));
const PurifikasiSection = lazy(() => import("@/modules/purifikasiSection"));
const RulesSection = lazy(() => import("@/modules/rulesSection"));
const ProfileDr = lazy(() => import("@/modules/profileDr"));
const ProfileCompany = lazy(() => import("@/modules/profileCompany"));
const SolutionSection = lazy(() => import("@/modules/solution"));
const YoutubeSection = lazy(() => import("@/modules/youtube"));
const FormSection = lazy(() => import("@/modules/formSection"));
const MarketPlace = lazy(() => import("@/modules/marketPlace"));
const Distributor = lazy(() => import("@/modules/distributor"));

const HomePages = () => {
  return (
    <MainLayout>
      <CoverModules />
      <TestimonialModules />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <SevenSection />
      <EightSection />
      <BpomSection />
      <PurifikasiSection />
      <RulesSection />
      <ProfileDr />
      <ProfileCompany />
      <SolutionSection />
      <YoutubeSection />
      <FormSection />
      <MarketPlace />
      <Distributor />
    </MainLayout>
  );
};

export default HomePages;
