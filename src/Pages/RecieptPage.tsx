import MainIcon from "../components/globalFolder/MainIcon";
import RecieptContainer from "../components/reciept/RecieptContainer";
import "./RecieptPage.scss";

const RecieptPage = () => {
  return (
    <section className="reciept-page">
      <section className="reciept-page__inner-container">
        <MainIcon />
        <RecieptContainer />
      </section>
    </section>
  );
};

export default RecieptPage;
