import MainIcon from "../components/globalFolder/MainIcon";
import RecieptContainer from "../components/reciept/RecieptContainer";
import "./RecieptPage.scss";
import Button from "../components/globalFolder/Button";
import { useNavigate } from "react-router-dom";

const RecieptPage = () => {
  const navigate = useNavigate();
  return (
    <section className="reciept-page">
      <section className="reciept-page__inner-container">
        <MainIcon />
        <RecieptContainer />
      </section>
      <section className="reciept-page__btn-wrapper">
        <Button
          border="none"
          onclick={() => {
            navigate("/");
          }}
          color="rgba(53, 49, 49, 1)"
        >
          GÖR EN NY BESTÄLLNING
        </Button>
      </section>
    </section>
  );
};

export default RecieptPage;
