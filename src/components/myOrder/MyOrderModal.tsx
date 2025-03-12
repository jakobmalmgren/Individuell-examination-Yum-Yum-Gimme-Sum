import { useNavigate } from "react-router-dom";
import Button from "../globalFolder/Button";
import Cart from "../globalFolder/Cart";
import MyOrderItem from "./MyOrderItem";
import "./MyOrderModal.scss";
import { useSelector } from "react-redux";

const MyOrderModal = ({ handleCartModal }) => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => {
    return state.orderItem;
  });
  return (
    <section className="myorder-modal">
      <section className="myorder-modal__inner-container">
        <section className="myorder-modal__header-wrapper">
          <Cart handleCartModal={handleCartModal} />
        </section>
        <section className="myorder-modal__content-wrapper">
          <section className="myorder-modal__item-container">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <MyOrderItem item={item} />
                </div>
              );
            })}
            {/* <MyOrderItem />
            <MyOrderItem />
            <MyOrderItem /> */}
          </section>

          <section className="myorder-modal__lower-wrapper">
            <section className="myorder-modal__total">
              <p className="myorder-modal__header">TOTAL</p>
              <p className="myorder-modal__sek">101 SEK</p>
            </section>
            <Button
              onclick={() => {
                navigate("/Eta");
              }}
              border="none"
              color="rgba(53, 49, 49, 1)"
            >
              TAKE MY MONEY!
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default MyOrderModal;
