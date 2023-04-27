import { children } from "react";

const WrapperLayout = ({ children }) => {
  return (
    <section className="grid place-content-center p-4 rounded-2xl bg-[#C92064] text-[#FFD155] max-w-[500px] lg:w-[500px] lg:h-[450px] max-h-[450px]">
      {children}
    </section>
  );
};

export default WrapperLayout;
