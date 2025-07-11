import Sidebar from "../components/Home/sidebar";
import Topbarbar from "../components/Home/Topbar";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
        <Topbarbar />
        <div className="flex flex-1 overflow-hidden">
            <div>
                <Sidebar/>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5">
                <Outlet/>

            </div>
        </div>
        </div>
    );
    }