import DippSaucesBtn from "./DippSaucesBtn";
import MenuItem from "./MenuItem";
import "./MenuSkeleton.scss";

const MenuSkeleton = () => {
  return (
    <section className="menu-skeleton">
      <section className="menu-skeleton__innercontainer">
        <h1 className="menu-skeleton__header">MENY</h1>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <section className="menu-skeleton__dipp-wrapper">
          <DippSaucesBtn>bbq</DippSaucesBtn>
          <DippSaucesBtn>chedder</DippSaucesBtn>
          <DippSaucesBtn>lalal2</DippSaucesBtn>
          <DippSaucesBtn>aaa2</DippSaucesBtn>
          <DippSaucesBtn>bbq</DippSaucesBtn>
          <DippSaucesBtn>bbq</DippSaucesBtn>
        </section>
      </section>
    </section>
  );
};

export default MenuSkeleton;
