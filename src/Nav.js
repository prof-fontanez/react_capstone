import { Link } from "react-router-dom";
import BookingPage from "./BookinPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";

function Nav () {

    return(
    <div>
        <nav>
            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/menu" className="link">Menu</Link></li>
                <li><Link to="/booking" className="link">Reservations</Link></li>
                <li><Link to="/" className="link">Order Online</Link></li>
                <li><Link to="/" className="link">Login</Link></li>
            </ul> 
        </nav>
    </div>
    );
}

export default Nav;