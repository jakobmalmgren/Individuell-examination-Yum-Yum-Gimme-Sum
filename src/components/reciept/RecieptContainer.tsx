import "./RecieptContainer.scss";
import RecieptIcon from "./RecieptIcon";
import RecieptItem from "./RecieptItem";
import { useSelector } from "react-redux";

const RecieptContainer = () => {
  // kan inte nå reciept när man trycker direkt så
  //måste isåfall fixa de om man ska ha bra UI/UX
  const { reciept } = useSelector((state) => {
    return state.api;
  });

  const sum = reciept.receipt.items.map((item) => {
    return item.price;
  });

  const total = sum.reduce((acc, curr) => {
    return acc + curr;
  });

  const items = reciept.receipt.items;

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
};

export default RecieptContainer;
