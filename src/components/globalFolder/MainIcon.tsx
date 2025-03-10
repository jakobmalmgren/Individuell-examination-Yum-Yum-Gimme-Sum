import "./MainIcon.scss";
import icon from "../../images/Group 6.svg";
import { useNavigate } from "react-router-dom";

const MainIcon = () => {
  const nav = useNavigate();
  return (
    <section className="main-icon">
      <img
        src={icon}
        alt=""
        onClick={() => {
          nav("/");
        }}
      />
    </section>
  );
};

export default MainIcon;
