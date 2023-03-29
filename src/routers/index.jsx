import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePages = lazy(() => import("../pages"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
]);

export default router;
