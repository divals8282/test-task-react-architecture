import { createBrowserRouter } from "react-router";

import { Layout } from "../layout";

import { Home as HomePage } from "../pages/home";
import { UIKit as UIKitPage } from "../pages/ui-kit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/ui-kit", element: <UIKitPage /> },
    ],
  },
]);
