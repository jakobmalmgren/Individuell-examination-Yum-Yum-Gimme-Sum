import recieptIcon from "../../images/logo.png";
import "./RecieptIcon.scss";

const RecieptIcon = () => {
  return (
    <section className="reciept">
      <img className="reciept__icon" src={recieptIcon} alt="" />
    </section>
  );
};

export default RecieptIcon;
