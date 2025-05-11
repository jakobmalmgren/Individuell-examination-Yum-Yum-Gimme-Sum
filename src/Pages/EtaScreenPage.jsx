import MainIcon from "../components/globalFolder/MainIcon";
import "./EtaScreenPage.scss";
import etaImage from "../images/boxtop 1.png";
import Button from "../components/globalFolder/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReciept } from "../redux/slices/apiSlice";
import { format } from "date-fns";

const EtaScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { etaInfo, key } = useSelector((state) => {
    return state.api;
  });
  let formattedDate;

  if (etaInfo && etaInfo.eta && etaInfo.eta !== "") {
    const dateStr = etaInfo.eta;
    const date = new Date(dateStr);
    formattedDate = format(date, "dd MMMM yyyy, HH:mm");
  }

  // använder mig av en handlClick för vill använda unwrap också
  // vilket gör man kan fånga upp result i createasyncfunc
  // så ja kan navigera när result finns..
  const handleClick = async () => {
    const result = await dispatch(
      getReciept({ key: key, id: etaInfo.id })
    ).unwrap();
    if (result) {
      navigate("/Reciept");
    }
  };

  return (
    <section className="eta">
      <section className="eta__inner-container">
        <MainIcon />
        <section className="eta__img-wrapper">
          <img className="eta__img" src={etaImage} alt="" />
        </section>
        {Object.keys(etaInfo).length === 0 ? (
          <section className="eta__info-wrapper">
            <h1 className="eta__header">DU HAR INGEN ORDER ÄN</h1>
          </section>
        ) : (
          <section className="eta__info-wrapper">
            <h1 className="eta__header">DINA WONTONS TILLAGAS!</h1>

            <h2 className="eta__time-left">
              ETA
              {formattedDate}
            </h2>
            <p className="eta__id"># {etaInfo.id} </p>
          </section>
        )}

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
            onclick={handleClick}
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
