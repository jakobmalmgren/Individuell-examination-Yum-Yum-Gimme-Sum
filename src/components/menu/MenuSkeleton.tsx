import MenuItem from "./MenuItem";
import "./MenuSkeleton.scss";

const MenuSkeleton = () => {
  return (
    <section className="menu-skeleton">
      <section className="menu-skeleton__innercontainer">
        <h1 className="menu-skeleton__header">MENY</h1>
        <MenuItem />
      </section>
    </section>
  );
};

export default MenuSkeleton;
