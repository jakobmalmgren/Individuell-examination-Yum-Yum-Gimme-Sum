import MainIcon from "../components/globalFolder/MainIcon";
import "./EtaScreenPage.scss";
import etaImage from "../images/boxtop 1.png";
import Button from "../components/globalFolder/Button";
const EtaScreen = () => {
  return (
    <section className="eta">
      <section className="eta__inner-container">
        <MainIcon />
        <img className="eta__img" src={etaImage} alt="" />
        <h1 className="eta__header">DINA WONTONS TILLAGAS!</h1>
        <h2 className="eta__time-left">ETA 5 min</h2>
        <p className="eta__id">#4kjwsdf234k</p>
        <Button color="rgba(53, 49, 49, 1)">GÖR EN NY BESTÄLLNING</Button>
        <Button
          border="1px solid rgba(244, 243, 241, 0.94)"
          color="rgba(96, 88, 88, 1)"
        >
          SE KVITTO
        </Button>
      </section>
    </section>
  );
};

export default EtaScreen;
