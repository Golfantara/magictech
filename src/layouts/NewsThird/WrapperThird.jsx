import { children } from "react";

const WrapperThirdLayout = ({ children }) => {
  return (
    <section className="grid rounded-2xl bg-[#C92064] text-[#FFD155]">
      {children}
    </section>
  );
};

export default WrapperThirdLayout;
