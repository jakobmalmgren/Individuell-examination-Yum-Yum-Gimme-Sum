import Cart from "../globalFolder/Cart";
import "./Navbar.scss";
import Hamburger from "hamburger-react";

const Navbar = ({ handleBurgerMenu, handleCartModal }) => {
  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper" onClick={handleBurgerMenu}>
        <Hamburger />
      </section>
      <Cart handleCartModal={handleCartModal} />
    </nav>
  );
};

export default Navbar;
