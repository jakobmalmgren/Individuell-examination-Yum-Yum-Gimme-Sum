import Button from "../globalFolder/Button";
import Cart from "../globalFolder/Cart";
import MainIcon from "../globalFolder/MainIcon";
import MyOrderItem from "./MyOrderItem";
import "./MyOrderModal.scss";

const MyOrderModal = () => {
  return (
    <section className="myorder-modal">
      <section className="myorder-modal__inner-container">
        <section className="myorder-modal__header-wrapper">
          <MainIcon />
          <Cart />
        </section>
        <section className="myorder-modal__content-wrapper">
          <section className="myorder-modal__item-container">
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            {/* <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem /> */}
          </section>

          <section className="myorder-modal__lower-wrapper">
            <section className="myorder-modal__total">
              <p className="myorder-modal__header">TOTAL</p>
              <p className="myorder-modal__sek">101 SEK</p>
            </section>
            <Button border="none" color="rgba(53, 49, 49, 1)">
              TAKE MY MONEY!
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default MyOrderModal;
