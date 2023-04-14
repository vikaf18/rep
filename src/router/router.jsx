import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

// Pages
import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";
import ApplicationPage from "../pages/ApplicationPage";

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
                path: 'products/:id',
                element: <SinglePage />
            },
            {
                path: '/applications/:id',
                element: <ApplicationPage />
            }
        ]
    }
]);

export default router;