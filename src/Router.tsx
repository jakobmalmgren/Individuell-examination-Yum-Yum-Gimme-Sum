import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import MenuPage from "./Pages/MenuPage";
import EtaScreen from "./Pages/EtaScreenPage";
import RecieptPage from "./Pages/RecieptPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MenuPage />} />
      <Route path="/Eta" element={<EtaScreen />} />
      <Route path="/Reciept" element={<RecieptPage />} />
    </Route>
  )
);
