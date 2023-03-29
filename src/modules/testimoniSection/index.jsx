import CarouselSection from "@/modules/testimoniSection/CarouselSection";
import InovasiSection from "@/modules/testimoniSection/InovasiSection";
import TestimoniLayout from "@/layouts/testimoni";
const TestimonialModules = () => {
  return (
    <>
      <TestimoniLayout>
        <div className="order-2 lg:-order-1 mt-2">
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
