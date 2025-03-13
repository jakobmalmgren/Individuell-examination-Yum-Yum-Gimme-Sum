import "./RecieptItem.scss";
const RecieptItem = ({ item }) => {
  return (
    <section className="reciept-item">
      <section className="reciept-item__wrapper">
        <h1 className="reciept-item__item-name">
          {item.name}...........................................
        </h1>
        <p className="reciept-item__item-sek">{item.price}</p>
      </section>
      <p className="reciept-item__item-amount">{item.quantity}</p>
    </section>
  );
};

export default RecieptItem;
