import { NavLink } from "react-router-dom";
import "./NavbarModalNavigation.scss";

const NavbarModalNavigation = () => {
  return (
    <section className="navbarModalNavigation">
      <ul className="navbarModalNavigation__ul">
        <li className="navbarModalNavigation__list-item">
          <NavLink to="/Eta" className="navbarModalNavigation__link">
            ETA
          </NavLink>
        </li>
        <li className="navbarModalNavigation__list-item">
          <NavLink to="/Reciept" className="navbarModalNavigation__link">
            RECIEPT
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default NavbarModalNavigation;
