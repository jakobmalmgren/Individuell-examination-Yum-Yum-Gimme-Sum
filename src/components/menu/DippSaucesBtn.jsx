import "./DippSaucesBtn.scss";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/orderItemSlice";

const DippSaucesBtn = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="dippSaucesBtn"
      onClick={() => {
        dispatch(addItem(item));
        console.log(item);
      }}
    >
      {item.name} <BsPlusLg />
    </button>
  );
};

export default DippSaucesBtn;
