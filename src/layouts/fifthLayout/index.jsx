import { children } from "react";

const Line = ({ children }) => {
  return (
    <div className="h-0.5 w-[1022px] bg-black my-2 rounded-l-full rounded-r-full">
      {children}
    </div>
  );
};

export default Line;
