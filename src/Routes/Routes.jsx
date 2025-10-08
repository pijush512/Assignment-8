import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppPage from '../Pages/AppPage/AppPage';
import InstallationPage from '../Pages/InstallationPage/InstallationPage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        },
        {
            path: 'app/',
            Component: AppPage,
        },
        {
            path: '/installation',
            Component: InstallationPage
        }
    ]
  },
]);