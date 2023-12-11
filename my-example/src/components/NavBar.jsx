import logo from '../assets/images/ironhack-logo-xs.png';
import MenuBurger from '../assets/images/menu-top-xs.png';
import "./navbar.module.css";

const NavBar = () => {
    return (
        <>
            <div className="nav-bar">
                <img src={logo} />
                <img src={MenuBurger} />
            </div>
        </>
    )
}

export default NavBar;