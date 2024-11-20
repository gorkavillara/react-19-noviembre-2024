import type { RouteObject } from "react-router-dom"
import App from "./App"
import { Contact } from "./views"
import Layout from "./layouts/Layout"
import Users from "./views/Users"
import UserDetail from "./views/Users/UserDetail"
import Products from "./views/Products"
import Redirect from "./views/Redirect"
import Access from "./views/Access"
import Admin from "./views/Admin"
import ProtectedRoute from "./components/ProtectedRoute"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
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
      {
        path: "users",
        element: <Users />,
        children: [
          {
            path: ":id",
            element: <UserDetail />,
          },
        ],
      },
      // {
      //   path: "users/:id",
      //   element: <UserDetail />
      // }
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
      {
        path: "access",
        element: <Access />,
      },
      {
        path: "admin",
        element: <ProtectedRoute element={<Admin />} />,
      },
    ],
  },
]
