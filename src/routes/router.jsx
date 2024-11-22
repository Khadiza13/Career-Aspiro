import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
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
