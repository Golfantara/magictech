import { children } from "react";

const MainLayout = ({ children }) => {
  return <section className="container mx-auto mt-24">{children}</section>;
};

export default MainLayout;
