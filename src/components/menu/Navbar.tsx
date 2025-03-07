import Cart from "../globalFolder/Cart";
import "./Navbar.scss";
import Hamburger from "hamburger-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper">
        <Hamburger />
      </section>
      <Cart />
    </nav>
  );
};

export default Navbar;
