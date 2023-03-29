import { children } from "react";

const MainLayout = ({ children }) => {
  return <section className="container mx-auto mt-12">{children}</section>;
};

export default MainLayout;
