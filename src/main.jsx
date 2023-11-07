import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Root from "./layouts/Root";
import Login from "./auth/Login";
import AuthProvider from "./providers/AuthProvider";
import SignUp from "./auth/SignUp";
import Home from "./pages/Home";
import AllServices from "./pages/AllServices";
import ServiceDetails from "./pages/ServiceDetails";
import PrivateRoute from "./routes/PrivateRoute";
import AddService from "./pages/AddService";
import MyServices from "./pages/MyServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("https://offline-service-server.vercel.app/services")
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://offline-service-server.vercel.app/services/${params.id}`)
      },
      {
        path: "/services/new",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/your-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
        loader: () => fetch(`services.json`)
        // loader: () => fetch(`https://offline-service-server.vercel.app/services/`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);