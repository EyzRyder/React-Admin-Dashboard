import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

const RootLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-[6] ">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;