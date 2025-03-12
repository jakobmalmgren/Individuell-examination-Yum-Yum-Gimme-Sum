import { useDispatch } from "react-redux";
import "./MenuItem.scss";
import { BsPlusLg } from "react-icons/bs";
import { addItem } from "../../redux/slices/orderItemSlice";
const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <section className="menu-item">
      <section className="menu-item__container-wrapper">
        <section className="menu-item__name-price-wrapper">
          <h1 className="menu-item__item-name">{item.name}..........</h1>
          <p className="menu-item__sek">{item.price} SEK</p>
        </section>

        <p className="menu-item__item-ingredienses">{item.description}</p>
      </section>

      <button
        className="menu-item__btn"
        onClick={() => {
          dispatch(addItem(item));
          console.log(item);
        }}
      >
        <BsPlusLg className="menu-item__icon" />
      </button>
    </section>
  );
};

export default MenuItem;
