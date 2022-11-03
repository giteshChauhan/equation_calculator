import AlertBox from "./alertBox";
import { useState } from "react";
import "../../css/box.css";

const EventBox = ({ onClose, onAdd }) => {
  const [isAlert, setIsAlert] = useState(false);

  const handleEventBox = (number) => {
    setIsAlert(false);
    const eventData = {
      doc: {
        _id: 7,
        alphabet: number,
        number,
      },
      isEventBox: true,
    };
    onAdd(eventData);
  };
  return (
    <>
      <div
        className="smallBox"
        style={{ marginLeft: "15px" }}
        onClick={() => setIsAlert(true)}
      >
        RHS
      </div>
      {isAlert && <AlertBox onInput={handleEventBox} isClose={setIsAlert} />}
    </>
  );
};

EventBox.defaultProps = {
  onClose: null,
};

export default EventBox;
