import "./Cart.scss";

import { TbShoppingBag } from "react-icons/tb";
const Cart = () => {
  return (
    <section className="cart">
      <TbShoppingBag className="cart__icon" />
      <section className="cart__amount">1</section>
    </section>
  );
};

export default Cart;
