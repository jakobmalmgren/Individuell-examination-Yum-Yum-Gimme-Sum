import { useSelector } from "react-redux";
import "./DrinkComponent.scss";
import DrinkBtn from "./DrinkBtn";

const DrinkComponent = () => {
  const { items } = useSelector((state) => {
    return state.api;
  });
  const onlyDrink = items.filter((item) => {
    return item.type === "drink";
  });
  return (
    <section className="drink">
      <section className="drink__container-wrapper">
        <section className="drink__name-price-wrapper">
          <h1 className="drink__item-name">DRICKA..........</h1>
          <p className="drink__sek">19 SEK</p>
        </section>
        <section className="drink__wrapper">
          {onlyDrink.map((item) => {
            return (
              <div key={item.id}>
                <DrinkBtn item={item} />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default DrinkComponent;
