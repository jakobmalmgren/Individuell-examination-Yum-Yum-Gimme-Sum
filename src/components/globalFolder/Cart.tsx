import "./Cart.scss";

import { TbShoppingBag } from "react-icons/tb";
const Cart = ({ handleCartModal }) => {
  return (
    <section className="cart" onClick={handleCartModal}>
      <TbShoppingBag className="cart__icon" />
      <section className="cart__amount">1</section>
    </section>
  );
};

export default Cart;
