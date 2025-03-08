import "./Button.scss";

const Button = ({ children, color, border }) => {
  return (
    <button
      style={{ backgroundColor: color, border: border }}
      className="main-btn"
    >
      {children}
    </button>
  );
};

export default Button;
