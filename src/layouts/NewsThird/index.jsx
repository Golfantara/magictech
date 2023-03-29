import { children } from "react";

const NewsThirdLayout = ({ children }) => {
  return (
    <section className="grid mx-4 grid-cols-1 md:grid-cols-2 gap-4 place-content-center pt-10">
      {children}
    </section>
  );
};

export default NewsThirdLayout;
