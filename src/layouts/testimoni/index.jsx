import { children } from "react";

const TestimoniLayout = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-2 place-items-center mt-12">
      {children}
    </div>
  );
};

export default TestimoniLayout;
