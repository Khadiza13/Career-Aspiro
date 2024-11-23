import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../components/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Services></Services>,
            loader: () => fetch("../services.json"),
          },
        ],
      },
      {
        path: "/profile",
        element: <h1>profile page</h1>,
      },
      {
        path: "/event",
        element: <h1>event page</h1>,
      },
    ],
  },
]);

export default router;
