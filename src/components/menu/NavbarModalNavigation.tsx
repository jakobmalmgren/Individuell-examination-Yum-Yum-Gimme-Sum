import "./NavbarModalNavigation.scss";

const NavbarModalNavigation = () => {
  return (
    <section className="navbarModalNavigation">
      <ul className="navbarModalNavigation__ul">
        <li className="navbarModalNavigation__list-item">
          <a className="navbarModalNavigation__link" href="">
            ETA
          </a>
        </li>
        <li className="navbarModalNavigation__list-item">
          <a className="navbarModalNavigation__link" href="">
            RECIEPT
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavbarModalNavigation;
