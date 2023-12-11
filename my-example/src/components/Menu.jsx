import logo from '../assets/images/ironhack-logo-xs.png';
import MenuBurger from '../assets/images/menu-top-xs.png';


const Menu = () => {
    console.log(logo)
    console.log(MenuBurger)
    return (
        <>
            <div className="menu-bar">
                <img src={logo} />
                <img src={MenuBurger} />
            </div>
        </>
    )
}

export default Menu;