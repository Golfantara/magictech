import { children } from "react";

const NewsLayout = ({ children }) => {
  return (
    <section className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-4 place-content-center pt-10">
      {children}
    </section>
  );
};

export default NewsLayout;
