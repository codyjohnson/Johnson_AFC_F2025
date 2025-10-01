import { Outlet } from "react-router-dom";
import NavBar from "./AppNavbar.jsx";

const AppLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default AppLayout;