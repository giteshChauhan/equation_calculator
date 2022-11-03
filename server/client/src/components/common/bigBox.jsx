import "../../css/box.css";

const BigBox = ({ content, isDrag, onClose, isRHS }) => {
  const dataToAdd = {
    doc: content,
    isBigBox: true,
    isEventBox: false,
  };
  const handleBoxDrag = (e) => {
    e.dataTransfer.setData("id", JSON.stringify(dataToAdd));
  };

  return (
    <div
      className="bigBox"
      style={isRHS ? { backgroundColor: "#6e00ff" } : null}
      draggable={isDrag}
      onDragStart={(e) => handleBoxDrag(e)}
    >
      {onClose && (
        <div
          className="closeBtn"
          style={{ transform: "translate(40px, -50px)" }}
          onClick={() => onClose(content)}
        >
          X
        </div>
      )}
      {content.alphabet}
    </div>
  );
};

BigBox.defaultProps = {
  isDrag: true,
  onClose: null,
  isRHS: false,
};

export default BigBox;
