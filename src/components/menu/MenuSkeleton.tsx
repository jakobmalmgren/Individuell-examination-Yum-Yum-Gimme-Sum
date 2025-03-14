import { useEffect } from "react";
import MenuItem from "./MenuItem";
import "./MenuSkeleton.scss";
import { CircleLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiKey, fetchMenu } from "../../redux/slices/apiSlice";
import DippSauceComponent from "./DippSauceComponent";
import DrinkComponent from "./DrinkComponent";

const MenuSkeleton = () => {
  const dispatch = useDispatch();

  const { items, key, status, error } = useSelector((state) => {
    return state.api;
  });

  useEffect(() => {
    if (status === "idle" && key) {
      dispatch(fetchApiKey());
      dispatch(fetchMenu(key));
    }
  }, [dispatch, status, key]);

  const filteredNoDipAndDrinks = items.filter((item) => {
    return item.type !== "dip" && item.type !== "drink";
  });

  return (
    <section className="menu-skeleton">
      <section className="menu-skeleton__innercontainer">
        {items.length === 0 ? (
          <div className="menu-skeleton__loading">
            <CircleLoader />
            <p>LOADING....</p>
          </div>
        ) : (
          <section>
            <h1 className="menu-skeleton__header">MENY</h1>

            {filteredNoDipAndDrinks.map((item) => (
              <div key={item.id}>
                <MenuItem item={item} />
              </div>
            ))}

            <DippSauceComponent />
            <DrinkComponent />
          </section>
        )}
      </section>
    </section>
  );
};

export default MenuSkeleton;
