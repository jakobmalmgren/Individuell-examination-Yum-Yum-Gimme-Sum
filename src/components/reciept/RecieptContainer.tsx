import "./RecieptContainer.scss";
import RecieptIcon from "./RecieptIcon";
import RecieptItem from "./RecieptItem";
import { useSelector } from "react-redux";

const RecieptContainer = () => {
  const { reciept } = useSelector((state) => {
    return state.api;
  });
  let total;
  let items;
  if (Object.keys(reciept).length !== 0) {
    console.log("Objektet är inte tomt.");
    console.log("lalaalalaa recieptt", reciept);

    const sum = reciept.receipt.items.map((item) => {
      return item.price;
    });

    total = sum.reduce((acc, curr) => {
      return acc + curr;
    });

    items = reciept.receipt.items;

    return (
      <section className="reciept-container">
        <section className="reciept-container__top-wrapper">
          <section className="reciept-container__icon-wrapper">
            <RecieptIcon />
          </section>
          <h1 className="reciept-container__kvitto">KVITTO</h1>
          <p className="reciept-container__order-nr">#{reciept.receipt.id}</p>
        </section>

        <section className="reciept-container__middle-wrapper">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <RecieptItem item={item} />
              </div>
            );
          })}
        </section>

        <section className="reciept-container__below-wrapper">
          <section className="reciept-container__total-amount-info">
            <section className="reciept-container__total-amount-text-wrapper">
              <h1 className="reciept-container__total">TOTALT</h1>
              <p className="reciept-container__moms">inkl 20% moms</p>
            </section>

            <p className="reciept-container__pris"> {total}</p>
          </section>
        </section>
      </section>
    );
  } else {
    return (
      <section className="reciept-container__no-reciept">
        <h1 className="reciept-container__text"> DU HAR INGET KVITTO ÄN!</h1>
      </section>
    );
  }
};

export default RecieptContainer;
