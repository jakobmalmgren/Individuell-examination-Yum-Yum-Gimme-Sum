import "./DippSaucesBtn.scss";
import { BsPlusLg } from "react-icons/bs";

const DippSaucesBtn = ({ item }) => {
  return (
    <button className="dippSaucesBtn">
      {item.name} <BsPlusLg />
    </button>
  );
};

export default DippSaucesBtn;
