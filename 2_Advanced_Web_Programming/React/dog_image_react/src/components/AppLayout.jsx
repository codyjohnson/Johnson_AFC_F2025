import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

const AppLayout = () => {
    return (
            <>
                <NavBar />
                    <Outlet />
            </>
    );
}

export default AppLayout;