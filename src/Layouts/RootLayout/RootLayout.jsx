import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

const RootLayout = () => {
    return (
        <div className="App">
            <Sidebar />
            <main className="flex-[6] bg-white text-black dark:text-[#9c9c9c] dark:bg-[#222]">
                <Navbar />
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;