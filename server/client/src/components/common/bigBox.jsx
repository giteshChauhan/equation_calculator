import "../../css/box.css";

const BigBox = ({ content }) => {
  const handleBoxDrag = (e, data) => {
    e.dataTransfer.setData("id", data);
  };

  return (
    <div
      className="bigBox"
      draggable={true}
      onDragStart={(e) => handleBoxDrag(e, content)}
    >
      {content}
    </div>
  );
};

export default BigBox;
