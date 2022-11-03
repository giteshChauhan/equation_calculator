import { useEffect, useState } from "react";
import "../../css/box.css";

const AlertBox = ({ onInput, isClose, text }) => {
  const [integer, setInteger] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="alertBox">
      <div
        className="alertCloseBtn"
        onClick={() => isClose(false)}
        style={text ? { transform: "translate(152px, -41px)" } : null}
      >
        X
      </div>
      {onInput && (
        <>
          <input
            type="integer"
            className="form-control"
            placeholder="Enter an integer..."
            onChange={(e) => setInteger(e.target.value)}
          />
          <button
            className="form-control btn btn-primary btn-sm mt-2"
            disabled={!integer}
            onClick={() => onInput(integer)}
          >
            OK
          </button>
        </>
      )}
      {text && <h5 style={{ margin: "0 40px" }}>{text}</h5>}
    </div>
  );
};

AlertBox.defaultProps = {
  onInput: null,
  text: false,
};

export default AlertBox;
