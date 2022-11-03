import "../../css/box.css";

const SmallBox = ({ content, isDrag, isClick, onAdd, onClose }) => {
  const dataToAdd = {
    doc: content,
    isBigBox: false,
    isEventBox: false,
  };
  const handleBoxDrag = (e) => {
    e.dataTransfer.setData("id", JSON.stringify(dataToAdd));
  };

  const handleBoxClick = () => {
    if (isClick) onAdd(dataToAdd);
  };

  return (
    <div
      className="smallBox"
      style={content.isCompare ? { backgroundColor: "orange" } : null}
      draggable={isDrag}
      onClick={() => handleBoxClick()}
      onDragStart={(e) => handleBoxDrag(e)}
    >
      {onClose && (
        <div className="closeBtn" onClick={() => onClose(content)}>
          X
        </div>
      )}
      {content.operation}
    </div>
  );
};

SmallBox.defaultProps = {
  isDrag: false,
  isClick: false,
  onClose: null,
};

export default SmallBox;
