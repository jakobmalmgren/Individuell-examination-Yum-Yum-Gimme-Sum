import MenuSkeleton from "../components/menu/MenuSkeleton";
import Navbar from "../components/menu/Navbar";
import NavbarModalNavigation from "../components/menu/NavbarModalNavigation";
import "./MenuPage.scss";
import MyOrderModal from "../components/myOrder/MyOrderModal";
import { useState } from "react";

const MenuPage = () => {
  // togglar burgarmenyn
  const [open, setOpen] = useState(false);
  const handleBurgerMenu = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  // togglar menymodalen
  const [openCartModal, setOpenCartModal] = useState(false);
  const handleCartModal = () => {
    setOpenCartModal((prev) => {
      return !prev;
    });
  };

  return (
    <section className="menu-page">
      <Navbar
        handleCartModal={handleCartModal}
        handleBurgerMenu={handleBurgerMenu}
      />
      {open && <NavbarModalNavigation />}
      {openCartModal && <MyOrderModal handleCartModal={handleCartModal} />}

      <section className="menu-page__wrapper-skeleton">
        <MenuSkeleton />
      </section>
    </section>
  );
};

export default MenuPage;
