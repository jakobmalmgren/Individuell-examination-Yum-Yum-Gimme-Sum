import MenuSkeleton from "../components/menu/MenuSkeleton";
import Navbar from "../components/menu/Navbar";
import NavbarModalNavigation from "../components/menu/NavbarModalNavigation";
import "./MenuPage.scss";
import MyOrderModal from "../components/myOrder/MyOrderModal";
import { useState } from "react";

const MenuPage = () => {
  // jag tex gär såhär:
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchApi());
  // }, []);
  // men såhär ska man inte behöva göra för o se key
  // andra alternativ fråga mandus!
  // kan ja köra dispatch o hämtta genom useeffect
  //bara ett ställe sen kan ja ta nycklen överallt
  //på alla sidor komponenter?

  // const dispatch = useDispatch();

  // const { items, key } = useSelector((state) => {
  //   return state.api;
  // });

  // console.log("key:", key);

  // useEffect(() => {
  //   dispatch(fetchApiKey());
  //   dispatch(fetchMenu(key));
  // }, []);

  // const { key } = useSelector((state) => {
  //   return state.key;
  // });
  // console.log(key);

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
