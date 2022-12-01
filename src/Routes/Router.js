import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import RentProperties from "../RentProperties/RentProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/rentProperties",
        element: <RentProperties></RentProperties>,
      },
    ],
  },
]);
