import "./MenuItem.scss";
const MenuItem = () => {
  return (
    <section className="menu-item">
      <section className="menu-item__name-price-wrapper">
        <h1 className="menu-item__item-name">KARLSTAD..........</h1>
        <p>9 SEK</p>
      </section>

      <p className="menu-item__item-ingredienses">
        kantarell, scharlottenlök, morot, bladpersilja
      </p>
    </section>
  );
};

export default MenuItem;
