import BigBox from "../common/bigBox";
import "../../css/bar.css";

const Bar = ({ data }) => {
  return (
    <div className="bar">
      {data.map((content, index) => (
        <BigBox key={index} content={content} />
      ))}
    </div>
  );
};

export default Bar;
