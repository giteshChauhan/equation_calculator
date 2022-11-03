import BigBox from "../common/bigBox";
import "../../css/bar.css";

const Evaluator = ({ data, onAdd }) => {
  const handleDragOverBox = (e) => {
    e.preventDefault();
  };

  const handleDropBox = (e) => {
    e.preventDefault();
    const content = e.dataTransfer.getData("id");
    onAdd(content);
  };

  return (
    <div
      className="bar"
      onDragOver={(e) => handleDragOverBox(e)}
      onDrop={(e) => handleDropBox(e)}
    >
      {data.map((item, index) => (
        <BigBox content={item} key={index} />
      ))}
    </div>
  );
};

export default Evaluator;
