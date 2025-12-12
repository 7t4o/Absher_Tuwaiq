import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="app">
            <Nav />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}
