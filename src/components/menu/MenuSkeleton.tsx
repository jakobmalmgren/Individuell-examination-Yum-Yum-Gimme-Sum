import { useEffect } from "react";
import MenuItem from "./MenuItem";
import "./MenuSkeleton.scss";
import { CircleLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiKey, fetchMenu } from "../../redux/slices/apiSlice";
import DippSauceComponent from "./DippSauceComponent";

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

  const filteredNoDip = items.filter((item) => {
    return item.type !== "dip";
  });

  return (
    <section className="menu-skeleton">
      <section className="menu-skeleton__innercontainer">
        {status === "loading" && (
          <div className="menu-skeleton__loading">
            <CircleLoader />
          </div>
        )}
        {status === "failed" && <div>Fel vid hämtning av menyn: {error}</div>}

        {status === "succeeded" && (
          <>
            <h1 className="menu-skeleton__header">MENY</h1>

            {filteredNoDip.length > 0 ? (
              filteredNoDip.map((item) => (
                <div key={item.id}>
                  <MenuItem item={item} />
                </div>
              ))
            ) : (
              <div>Inga objekt tillgängliga för visning just nu.</div>
            )}

            <DippSauceComponent />
          </>
        )}
      </section>
    </section>
  );
};

export default MenuSkeleton;
