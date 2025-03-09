import MainIcon from "../components/globalFolder/MainIcon";
import RecieptContainer from "../components/reciept/RecieptContainer";
import "./RecieptPage.scss";
import Button from "../components/globalFolder/Button";

const RecieptPage = () => {
  return (
    <section className="reciept-page">
      <section className="reciept-page__inner-container">
        <MainIcon />
        <RecieptContainer />
      </section>
      <section className="reciept-page__btn-wrapper">
        <Button color="rgba(53, 49, 49, 1)">GÖR EN NY BESTÄLLNING</Button>
      </section>
    </section>
  );
};

export default RecieptPage;
