import { useEffect } from "react";
import DippSaucesBtn from "./DippSaucesBtn";
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
  // const spinner = () => {
  //   if (status === "loading") {
  //     return <CircleLoader />;
  //   }
  // };

  console.log("itemsaaaa,", items);
  // console.log(Array.isArray(items));

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
