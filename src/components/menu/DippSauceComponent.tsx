import { useSelector } from "react-redux";
import "./DippSauceComponent.scss";
import DippSaucesBtn from "./DippSaucesBtn";
const DippSauceComponent = () => {
  const { items } = useSelector((state) => {
    return state.api;
  });
  const onlyDip = items.filter((item) => {
    return item.type === "dip";
  });

  return (
    <section className="dipp-sauce">
      <section className="dipp-sauce__container-wrapper">
        <section className="dipp-sauce__name-price-wrapper">
          <h1 className="dipp-sauce__item-name">DIPPSÅS..........</h1>
          <p className="dipp-sauce__sek">19 SEK</p>
        </section>
        <section className="dipp-sauce__dip-wrapper">
          {onlyDip.map((item) => {
            return (
              <div key={item.id}>
                <DippSaucesBtn item={item} />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default DippSauceComponent;
