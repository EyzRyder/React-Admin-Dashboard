import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

const RootLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-[6] ">
                <Navbar />
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;