import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddToFindRoommate from "../Pages/AddToFindRoommate";
import Details from "../Pages/Details";
import BrowseListing from "../Pages/BrowseListing";
import MyListing from "../Pages/MyListing";
import UpdatePost from "../Pages/UpdatePost";
import C404 from "../Components/C404";
import PrivateRouteProvider from "../Provider/PrivateRouteProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("https://roommate-finder-server-two.vercel.app/roommates/filter"),
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/add-to-find-roommate",
        element: (
          <PrivateRouteProvider>
            <AddToFindRoommate />
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-two.vercel.app/roommates/${params.id}`),
        element: (
          <PrivateRouteProvider>
            <Details></Details>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/browse-listing",
        loader: () => fetch("https://roommate-finder-server-two.vercel.app/roommates"),
        element: <BrowseListing></BrowseListing>,
      },
      {
        path: "/my-listing",

        element: (
          <PrivateRouteProvider>
            <MyListing></MyListing>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/update-post/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-two.vercel.app/roommates/${params.id}`),
        element: (
          <PrivateRouteProvider>
            <UpdatePost></UpdatePost>
          </PrivateRouteProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: C404,
  },
]);

export default router;
