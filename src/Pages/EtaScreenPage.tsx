import MainIcon from "../components/globalFolder/MainIcon";
import "./EtaScreenPage.scss";
import etaImage from "../images/boxtop 1.png";
import Button from "../components/globalFolder/Button";
import { useNavigate } from "react-router-dom";
const EtaScreen = () => {
  const navigate = useNavigate();
  return (
    <section className="eta">
      <section className="eta__inner-container">
        <MainIcon />
        <section className="eta__img-wrapper">
          <img className="eta__img" src={etaImage} alt="" />
        </section>
        <section className="eta__info-wrapper">
          <h1 className="eta__header">DINA WONTONS TILLAGAS!</h1>
          <h2 className="eta__time-left">ETA 5 min</h2>
          <p className="eta__id">#4kjwsdf234k</p>
        </section>
        <section className="eta__btn-wrapper">
          <Button
            onclick={() => {
              navigate("/");
            }}
            border="none"
            color="rgba(53, 49, 49, 1)"
          >
            GÖR EN NY BESTÄLLNING
          </Button>
          <Button
            onclick={() => {
              navigate("/Reciept");
            }}
            border="1px solid rgba(244, 243, 241, 0.94)"
            color="rgba(96, 88, 88, 1)"
          >
            SE KVITTO
          </Button>
        </section>
      </section>
    </section>
  );
};

export default EtaScreen;
