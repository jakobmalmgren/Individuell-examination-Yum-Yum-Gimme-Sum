import { useSelector } from "react-redux";
import "./Cart.scss";

import { TbShoppingBag } from "react-icons/tb";

const Cart = ({ handleCartModal }) => {
  const { items } = useSelector((state) => {
    return state.orderItem;
  });

  // lägger till antal man lägger till i cart
  const totalCartValue = items.map((item) => {
    return item.quantity;
  });

  const addedAllNumber = totalCartValue.reduce((acc, curr) => acc + curr, 0);

  return (
    <section className="cart" onClick={handleCartModal}>
      <TbShoppingBag className="cart__icon" />
      <section className="cart__amount">{addedAllNumber}</section>
    </section>
  );
};

export default Cart;
