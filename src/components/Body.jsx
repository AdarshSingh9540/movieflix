import React from 'react';
import Login from './login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import FullDetail from './FullDetail';
function Body() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browse />
        },
        {
            path: '/full-detail',
            element: <FullDetail />
          }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
