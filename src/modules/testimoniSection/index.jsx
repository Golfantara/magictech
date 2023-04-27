import CarouselSection from "@/modules/testimoniSection/CarouselSection";
import InovasiSection from "@/modules/testimoniSection/InovasiSection";
import TestimoniLayout from "@/layouts/testimoni";
const TestimonialModules = () => {
  return (
    <>
      <TestimoniLayout>
        <div>
          <InovasiSection />
        </div>
        <div>
          <CarouselSection />
        </div>
      </TestimoniLayout>
    </>
  );
};

export default TestimonialModules;
