import Nav from "./Nav";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = props => (

    <>
        <div className="banner">
            <Header />
            <Nav/>
        </div>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default Layout;