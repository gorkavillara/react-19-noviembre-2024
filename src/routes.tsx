import type { RouteObject } from "react-router-dom"
import App from "./App"
import { Contact } from "./views"
import Layout from "./layouts/Layout"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <App />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]
