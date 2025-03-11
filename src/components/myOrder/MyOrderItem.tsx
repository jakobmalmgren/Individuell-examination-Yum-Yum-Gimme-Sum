import "./MyOrderItem.scss";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
const MyOrderItem = () => {
  return (
    <section className="myorder-item">
      <p className="myorder-item__name">KARLSTAD..................</p>
      <button className="myorder-item__btn">
        <FiMinus className="myorder-item__icon" />
      </button>
      <section className="myorder-item__amount"> 6</section>
      <button className="myorder-item__btn">
        <BsPlusLg className="myorder-item__icon" />
      </button>
      <section className="myorder-item__trash">
        <FaRegTrashCan />
      </section>
      <p className="myorder-item__price"> 27 SEK</p>
    </section>
  );
};

export default MyOrderItem;
