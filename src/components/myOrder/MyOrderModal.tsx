import { useNavigate } from "react-router-dom";
import Button from "../globalFolder/Button";
import Cart from "../globalFolder/Cart";
import MyOrderItem from "./MyOrderItem";
import "./MyOrderModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetItems } from "../../redux/slices/orderItemSlice";
import { fetchTenant, submitOrder } from "../../redux/slices/apiSlice";

const MyOrderModal = ({ handleCartModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items } = useSelector((state) => {
    return state.orderItem;
  });

  const { key, tenant } = useSelector((state) => {
    return state.api;
  });

  useEffect(() => {
    if (key) {
      dispatch(fetchTenant(key));
    }
  }, [key, dispatch]);

  // lägger till total för allt
  const totalAmount = items.map((item) => {
    return item.price * item.quantity;
  });

  const handleClick = async () => {
    const result = await dispatch(submitOrder({ tenant, key, items })).unwrap();
    if (result) {
      navigate("/Eta");
      // dispatch(resetItems());
    }
  };

  const totalAmountAllItems = totalAmount.reduce((acc, curr) => acc + curr, 0);

  return (
    <section className="myorder-modal">
      <section className="myorder-modal__inner-container">
        <section className="myorder-modal__header-wrapper">
          <Cart handleCartModal={handleCartModal} />
        </section>

        <section className="myorder-modal__content-wrapper">
          <section className="myorder-modal__item-container">
            {items.length <= 0 ? (
              <div className="myorder-modal__inga-varor">
                DU HAR INGA VAROR I VARUKORGEN
              </div>
            ) : (
              items.map((item) => {
                return (
                  <div key={item.id}>
                    <MyOrderItem item={item} />
                  </div>
                );
              })
            )}
          </section>

          <section className="myorder-modal__lower-wrapper">
            <section className="myorder-modal__total">
              <p className="myorder-modal__header">TOTAL</p>
              <p className="myorder-modal__sek">{totalAmountAllItems} SEK</p>
            </section>
            <Button
              onclick={handleClick}
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
