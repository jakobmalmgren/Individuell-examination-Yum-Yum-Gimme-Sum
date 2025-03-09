import "./RecieptItem.scss";
const RecieptItem = () => {
  return (
    <section className="reciept-item">
      <section className="reciept-item__wrapper">
        <h1 className="reciept-item__item-name">
          KARLSTAD............................................
        </h1>
        <p className="reciept-item__item-sek">27 SEK</p>
      </section>
      <p className="reciept-item__item-amount">3 stycken</p>
    </section>
  );
};

export default RecieptItem;
