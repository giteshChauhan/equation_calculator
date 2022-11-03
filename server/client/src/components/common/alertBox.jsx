import { useEffect, useState } from "react";
import "../../css/box.css";

const AlertBox = ({ onInput, isClose }) => {
  const [integer, setInteger] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="alertBox">
      <div className="alertCloseBtn" onClick={() => isClose(false)}>
        X
      </div>
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
    </div>
  );
};

export default AlertBox;
