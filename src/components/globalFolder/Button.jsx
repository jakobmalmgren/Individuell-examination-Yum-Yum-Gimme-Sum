import "./Button.scss";

const Button = ({ children, color, border, onclick }) => {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: color, border: border }}
      className="main-btn"
    >
      {children}
    </button>
  );
};

export default Button;
