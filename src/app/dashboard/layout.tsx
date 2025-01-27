import Sidebar from "../component/SideBar/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row min-h-screen">
            {/* Sidebar */}
            <div className=" bg-primary">
                <Sidebar />
            </div>

            {/* Main content */}
            <main className="flex-1">{children}</main>
        </div>
    );
}
