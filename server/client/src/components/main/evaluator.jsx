import SmallBox from "../common/smallBox";
import BigBox from "../common/bigBox";
import "../../css/bar.css";

const Evaluator = ({ data, onAdd, onRemove }) => {
  const handleDragOverBox = (e) => {
    e.preventDefault();
  };

  const handleDropBox = (e) => {
    e.preventDefault();
    const content = JSON.parse(e.dataTransfer.getData("id"));
    onAdd(content);
  };

  return (
    <div
      className="bar"
      onDragOver={(e) => handleDragOverBox(e)}
      onDrop={(e) => handleDropBox(e)}
    >
      {data.map(({ doc, isBigBox, isEventBox }) => {
        if (isEventBox)
          return (
            <BigBox
              content={doc}
              key={doc._id}
              isDrag={false}
              onClose={onRemove}
              isRHS={true}
            />
          );
        if (isBigBox)
          return (
            <BigBox
              content={doc}
              key={doc._id}
              isDrag={false}
              onClose={onRemove}
            />
          );
        return <SmallBox content={doc} key={doc._id} onClose={onRemove} />;
      })}
    </div>
  );
};

export default Evaluator;
