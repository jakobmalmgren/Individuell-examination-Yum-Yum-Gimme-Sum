import "./App.css";
import NavbarModalNavigation from "./components/menu/NavbarModalNavigation";
import MyOrderModal from "./components/myOrder/MyOrderModal";
import EtaScreen from "./Pages/EtaScreenPage";
import MenuPage from "./Pages/MenuPage";
import RecieptPage from "./Pages/RecieptPage";

function App() {
  return (
    <section>
      {/* <MenuPage />
      <NavbarModalNavigation /> */}
      {/* <RecieptPage /> */}
      <MyOrderModal />
      {/* <EtaScreen /> */}
    </section>
  );
}

export default App;
