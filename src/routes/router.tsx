import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { Home } from "@/pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      }
    ]
  }
]);

export default Router;
