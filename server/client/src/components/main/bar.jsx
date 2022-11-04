import SmallBox from "../common/smallBox";
import EventBox from "../common/eventBox";
import BigBox from "../common/bigBox";
import "../../css/bar.css";

const Bar = ({ data, isBigBox, onAdd, isEventBox }) => {
  return (
    <div className="bar">
      {data.map((content, index) => {
        if (isBigBox) return <BigBox key={index} content={content} />;
        const { isClick, isDrag } = content;
        return (
          <SmallBox
            content={content}
            key={index}
            isClick={isClick}
            isDrag={isDrag}
            onAdd={onAdd}
          />
        );
      })}
      {data.length ? null : (
        <div
          className="spinner-border text-primary"
          style={{ marginLeft: "2%" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {isEventBox && <EventBox onAdd={onAdd} />}
    </div>
  );
};

Bar.defaultProps = {
  isBigBox: true,
  isEventBox: false,
};

export default Bar;
