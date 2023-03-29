import { children } from "react";

const WrapperLayout = ({ children }) => {
  return (
    <section className="grid p-4 rounded-2xl bg-[#C92064] text-[#FFD155]">
      {children}
    </section>
  );
};

export default WrapperLayout;
