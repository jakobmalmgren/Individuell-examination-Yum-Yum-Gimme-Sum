import "./DrinkBtn.scss";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/orderItemSlice";

const DrinkBtn = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="drinkBtn"
      onClick={() => {
        dispatch(addItem(item));
        console.log(item);
      }}
    >
      {item.name} <BsPlusLg />
    </button>
  );
};

export default DrinkBtn;
