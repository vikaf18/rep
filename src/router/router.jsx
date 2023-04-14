import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

// Pages
import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";
import RequestPage from "../pages/RequestPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
            },
            {
                path: 'services/:id',
                element: <SinglePage />
            },
            {
                path: '/request',
                element: <RequestPage />
            }
        ]
    }
]);

export default router;