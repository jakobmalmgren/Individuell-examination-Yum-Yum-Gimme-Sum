import "./MenuItem.scss";
import { BsPlusLg } from "react-icons/bs";
const MenuItem = () => {
  return (
    <section className="menu-item">
      <section className="menu-item__container-wrapper">
        <section className="menu-item__name-price-wrapper">
          <h1 className="menu-item__item-name">KARLSTAD..........</h1>
          <p className="menu-item__sek">9 SEK</p>
        </section>

        <p className="menu-item__item-ingredienses">
          kantarell, scharlottenlök, morot, bladpersilja
        </p>
      </section>
      <button className="menu-item__btn">
        <BsPlusLg className="menu-item__icon" />
      </button>
    </section>
  );
};

export default MenuItem;
