import Nav from "./Nav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = props => (

    <>
        <div className="banner">
            <Header />
            <Nav/>
        </div>
        <main>
            <Outlet />
        </main>
    </>
);

export default Layout;