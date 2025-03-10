import "./RecieptContainer.scss";
import RecieptIcon from "./RecieptIcon";
import RecieptItem from "./RecieptItem";

const RecieptContainer = () => {
  return (
    <section className="reciept-container">
      <section className="reciept-container__top-wrapper">
        <section className="reciept-container__icon-wrapper">
          <RecieptIcon />
        </section>
        <h1 className="reciept-container__kvitto">KVITTO</h1>
        <p className="reciept-container__order-nr">#4kjwsdf234k</p>
      </section>

      <section className="reciept-container__middle-wrapper">
        <RecieptItem />
        <RecieptItem />
        {/* <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem />
        <RecieptItem /> */}
      </section>

      <section className="reciept-container__below-wrapper">
        <section className="reciept-container__total-amount-info">
          <section className="reciept-container__total-amount-text-wrapper">
            <h1 className="reciept-container__total">TOTALT</h1>
            <p className="reciept-container__moms">inkl 20% moms</p>
          </section>

          <p className="reciept-container__pris">101 SEK</p>
        </section>
      </section>
    </section>
  );
};

export default RecieptContainer;
