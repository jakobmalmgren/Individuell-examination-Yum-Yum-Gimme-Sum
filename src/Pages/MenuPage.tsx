import MenuSkeleton from "../components/menu/MenuSkeleton";
import Navbar from "../components/menu/Navbar";
import "./MenuPage.scss";

const MenuPage = () => {
  return (
    <section className="menu-page">
      <Navbar />
      <section className="menu-page__wrapper-skeleton">
        <MenuSkeleton />
      </section>
    </section>
  );
};

export default MenuPage;
