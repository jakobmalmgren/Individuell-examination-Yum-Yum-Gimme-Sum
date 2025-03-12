import { useEffect } from "react";
import MenuItem from "./MenuItem";
import "./MenuSkeleton.scss";
// import { CircleLoader } from "react-spinners";
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
      // setTimeout(() => {
      //   dispatch(fetchMenu(key));
      // }, 2000);
      dispatch(fetchMenu(key));
    }
  }, [dispatch, status, key]);

  const filteredNoDip = items.filter((item) => {
    return item.type !== "dip";
  });

  // sätta in staten me pending etc här...
  // if (status === "loading") {
  //   return <p>loading.....</p>;
  // }

  // if (status === "failed") {
  //   return <p>failed.....</p>;
  // }
  // if (error) {
  //   return <p>error....</p>;
  // }

  // else if{
  //   return <p>bla bla!</p>
  // }
  return (
    <section className="menu-skeleton">
      <section className="menu-skeleton__innercontainer">
        <h1 className="menu-skeleton__header">MENY</h1>
        {filteredNoDip.map((item) => {
          return (
            <div key={item.id}>
              <MenuItem item={item} />
            </div>
          );
        })}

        <DippSauceComponent />
      </section>
    </section>
  );
};

export default MenuSkeleton;
