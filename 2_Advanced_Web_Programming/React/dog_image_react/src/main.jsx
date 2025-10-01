import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import SplashPage from "./pages/SplashPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import RandomDogPage from "./pages/RandomDogPage.jsx";
import AppLayout from "./components/AppLayout.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "results",
            element: <RandomDogPage/>
        },
        {
            path: "splash",
            element: <SplashPage/>
        },
        {
            index: true,
            element: <SplashPage/>
        },
        {
            path: "*",
            element: <ErrorPage/>
        }
    ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
);