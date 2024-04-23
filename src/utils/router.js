import { createBrowserRouter } from "react-router-dom";

import {
    LandingPage,
} from "../pages"

export const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
]);