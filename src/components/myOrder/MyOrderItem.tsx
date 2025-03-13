import "./MyOrderItem.scss";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../../redux/slices/orderItemSlice";
import { useDispatch } from "react-redux";
const MyOrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const totalForEachItem = item.price * item.quantity;
  return (
    <section className="myorder-item">
      <p className="myorder-item__name">
        {item.name.toUpperCase()}..................
      </p>
      <section className="myorder-item__content-wrapper">
        <button
          className="myorder-item__btn"
          onClick={() => {
            dispatch(decrementItem(item));
          }}
        >
          <FiMinus className="myorder-item__icon" />
        </button>
        <section className="myorder-item__amount"> {item.quantity}</section>
        <button
          className="myorder-item__btn"
          onClick={() => {
            dispatch(incrementItem(item));
          }}
        >
          <BsPlusLg className="myorder-item__icon" />
        </button>
        <section
          className="myorder-item__trash"
          onClick={() => {
            dispatch(removeItem(item.id));
          }}
        >
          <FaRegTrashCan />
        </section>
      </section>
      <p className="myorder-item__price">{totalForEachItem}</p>
    </section>
  );
};

export default MyOrderItem;
